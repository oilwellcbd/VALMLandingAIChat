# VA Loans Finance Website

A next-generation landing page for VA Loans Finance with an AI-driven customer service component powered by Anthropic's Claude API.

## Features

- **AI-Powered VA Loan Expert Chat**: Interactive chat interface using Anthropic's Claude API to provide instant assistance to veterans
- **Modern, Responsive Design**: Built with Next.js and Tailwind CSS for a beautiful experience on all devices
- **Interactive Loan Tools**: Payment calculator and affordability estimator
- **Eligibility Checker**: Quick assessment of VA loan eligibility
- **WordPress Integration**: Ready for WordPress API integration for blog content
- **Military-Inspired Design**: Aesthetically pleasing design that honors military service

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Anthropic Claude API**: AI language model for the virtual VA Loan Advisor
- **WordPress API**: For blog content integration (future implementation)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- Anthropic API key for Claude

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/va-loans-finance.git
cd va-loans-finance
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
   - Copy `.env.example` to `.env.local`
   - Add your Anthropic API key to `.env.local`

4. Run the development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

- `/app`: Next.js app directory with pages and API routes
- `/components`: React components for the UI
- `/public`: Static assets like images and fonts
- `/styles`: Global CSS and Tailwind configuration

## Deployment

This project can be deployed on Vercel, Netlify, or any other platform that supports Next.js.

```bash
npm run build
```

## WordPress Integration

To connect to your WordPress site:
1. Ensure your WordPress site has REST API enabled
2. Configure the WordPress API URL in `.env.local`
3. The BlogSection component will automatically fetch and display your latest posts

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Anthropic for the Claude API
- The military community for their service
