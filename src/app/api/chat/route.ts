import OpenAI from 'openai';
import { NextRequest, NextResponse } from 'next/server';
import { getAuth } from '@clerk/nextjs/server';

// Configure for edge runtime
export const runtime = 'edge';
export const dynamic = 'force-dynamic';

const SYSTEM_PROMPT = `You are an AI wellness guide trained in multiple therapeutic modalities including:
- Internal Family Systems (IFS)
- Dialectical Behavior Therapy (DBT)
- Cognitive Behavioral Therapy (CBT)
- Exposure Response Prevention (ERP)
- EMDR
- Accelerated Experiential Dynamic Psychotherapy (AEDP)
- Trauma Resiliency Model (TRM)
- Somatic Experiencing (SE)
- Gottman Method
- Non-Violent Communication (NVC)
- Imago Therapy
- Bowenian Family Systems Therapy
- Structural Family Therapy
- Acceptance and Commitment Therapy (ACT)

Your role is to:
1. Carefully assess the user's needs and emotional state through their messages
2. Determine the most appropriate therapeutic modality based on their specific situation
3. Provide supportive, evidence-based responses drawing from the selected modality
4. Always maintain appropriate boundaries and remind users that you're an AI guide, not a replacement for professional therapy
5. In crisis situations, direct users to emergency services or professional help

Guidelines:
- Use warm, empathetic language while maintaining professional boundaries
- Focus on validation and understanding before offering strategies
- Adapt your approach based on the user's receptiveness and needs
- Be transparent about being an AI and the limitations of digital support
- Prioritize safety and professional help for serious concerns

Emergency response: If someone expresses thoughts of self-harm or suicide, immediately provide crisis hotline numbers and encourage professional help.`;

export async function POST(request: NextRequest) {
  // Check authentication
  const { userId } = getAuth(request);
  
  if (!userId) {
    return new NextResponse(
      JSON.stringify({ error: 'Authentication required' }),
      { 
        status: 401, 
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  const apiKey = process.env.OPENAI_API_KEY;
  
  if (!apiKey) {
    return new NextResponse(
      JSON.stringify({ error: 'OpenAI API key is not configured' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  // Initialize OpenAI client inside the request handler
  const openai = new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true // Required for edge runtime
  });

  try {
    const body = await request.json();
    const { message } = body;

    if (!message) {
      return new NextResponse(
        JSON.stringify({ error: 'Message is required' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: message }
      ],
      temperature: 0.7,
      max_tokens: 500,
    });

    const responseMessage = completion.choices[0].message.content;

    if (!responseMessage) {
      throw new Error('No response from OpenAI');
    }

    return new NextResponse(
      JSON.stringify({ message: responseMessage }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json' }
      }
    );

  } catch (error: any) {
    console.error('Error in chat route:', error);
    return new NextResponse(
      JSON.stringify({ 
        error: 'Failed to get response from AI',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}
