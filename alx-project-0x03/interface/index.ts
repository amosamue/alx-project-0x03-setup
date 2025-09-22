// For Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// For Layout component
export interface LayoutProps {
  children: React.ReactNode;
}

// For routing buttons on the home page
export interface PageRouteProps {
  pageRoute: string;
}
