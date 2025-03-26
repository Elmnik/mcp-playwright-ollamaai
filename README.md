
# MCP Playwright + OllamaAI Integration

A minimal project demonstrating browser automation testing with Playwright and local AI interactions using Ollama.

## 🚀 Features

- **Local AI Processing**: Uses Ollama's `tinyllama` model (no cloud API needed)
- **TypeScript Support**: Full type safety for both AI and testing code
- **Playwright Integration**: Real browser automation with assertions
- **Zero Mock Architecture**: All tests run against real Ollama instance

## 📦 Prerequisites

1. **Ollama Installation**:
 
   curl -fsSL https://ollama.com/install.sh | sh 

2. **Ollama Lightest Model**:
   
   ollama pull tinyllama
