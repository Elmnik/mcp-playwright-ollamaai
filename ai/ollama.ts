import { Ollama } from 'ollama';

export const ollama = new Ollama({ 
  host: 'http://localhost:11434' 
});

export async function ask(prompt: string): Promise<string> {
  const response = await ollama.chat({
    model: 'tinyllama',
    messages: [{ role: 'user', content: prompt }],
    options: { temperature: 0.3 }
  });
  return response.message.content;
}