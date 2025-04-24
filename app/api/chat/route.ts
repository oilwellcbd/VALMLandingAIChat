import { NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '', // Will be configured in .env
});

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    // Validate input
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request: messages array is required' },
        { status: 400 }
      );
    }

    // System prompt to give context about VA loans
    const systemPrompt = `You are an expert VA Loan Advisor for VA Loans Finance. 
    Your goal is to help veterans understand their VA loan benefits, determine eligibility, 
    and guide them through the application process. Be friendly, informative, and concise. 
    Always provide accurate information about VA loans, eligibility requirements, and benefits. 
    If you're unsure about something, acknowledge it and offer to connect the user with a human loan specialist.`;

    // Convert messages to Anthropic format
    const formattedMessages = messages.map((msg: any) => ({
      role: msg.role,
      content: msg.content,
    }));

    // Call Anthropic API
    const response = await anthropic.messages.create({
      model: 'claude-3-opus-20240229',
      max_tokens: 1024,
      messages: formattedMessages,
      system: systemPrompt,
      temperature: 0.7,
    });

    // Return the response
    return NextResponse.json({
      message: response.content[0].text,
    });
  } catch (error) {
    console.error('Error calling Anthropic API:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI service' },
      { status: 500 }
    );
  }
}
