import React, { useState } from 'react';
import { Menu, X, Bell, User, Moon, Sun } from 'lucide-react';
import { DiwalyaLogo } from './diwalya-logo';
import { Button } from './button';

interface NavbarProps {
  variant?: 'landing' | 'app';
  onAuthClick?: () => void;
}

export function Navbar({ variant = 'landing', onAuthClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  if (variant === 'landing') {
    return (
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <DiwalyaLogo size="md" />
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
              <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors">How It Works</a>
              <a href="#for-workers" className="text-foreground hover:text-accent transition-colors">For Workers</a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button variant="outline" size="sm" onClick={onAuthClick}>Sign In</Button>
              <Button variant="primary" size="sm" onClick={onAuthClick}>Get Started</Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
                <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors">How It Works</a>
                <a href="#for-workers" className="text-foreground hover:text-accent transition-colors">For Workers</a>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-foreground hover:text-accent transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
                <Button variant="outline" fullWidth onClick={onAuthClick}>Sign In</Button>
                <Button variant="primary" fullWidth onClick={onAuthClick}>Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>
    );
  }

  // App Navbar
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <DiwalyaLogo size="sm" />
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button className="relative p-2 rounded-lg hover:bg-muted transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-muted transition-colors">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
