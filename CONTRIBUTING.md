# Contributing to AiCal

First off, thank you for considering contributing to AiCal! It's people like you that make AiCal such a great tool.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct.

## How Can I Contribute?

### Reporting Bugs

- Use the GitHub issue tracker to report bugs
- Include as much detail as possible in your report
- If possible, include a minimal reproduction of the issue

### Suggesting Enhancements

- Use the GitHub issue tracker to suggest enhancements
- Be clear about the use case and benefits
- Consider contributing the enhancement yourself!

### Pull Requests

1. **Fork the repository** and clone it locally
2. **Create a branch** for your feature or fix:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes** following our coding standards
4. **Test your changes** thoroughly
5. **Commit your changes** using conventional commits:
   ```bash
   git commit -m 'feat: Add amazing feature'
   ```
6. **Push to your fork** and open a Pull Request

## Development Setup

1. Fork and clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
4. Add your Google API key to `.env.local`
5. Run the development server:
   ```bash
   npm run dev
   ```

## Coding Standards

- Follow the existing code style
- Use TypeScript for type safety
- Write meaningful variable and function names
- Add comments where necessary
- Follow the existing directory structure
- Use conventional commit messages (feat, fix, chore, etc.)

## Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New features
- `fix:` - Bug fixes
- `chore:` - Maintenance tasks
- `docs:` - Documentation changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `perf:` - Performance improvements

## Questions?

If you have any questions, feel free to open an issue on GitHub or reach out to the maintainers.

Thank you for contributing! 🎉
