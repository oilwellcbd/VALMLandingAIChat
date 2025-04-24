import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VA Loans Finance | Expert VA Loan Services',
  description: 'VA Loans Finance offers specialized VA loan services for military members, veterans, and their families. Get expert guidance on VA home loans, refinancing, and more.',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/3b4d326483.js" crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
