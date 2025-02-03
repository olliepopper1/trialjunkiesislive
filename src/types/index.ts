export interface Trial {
  id: string;
  name: string;
  status: string;
  expiryDate: string;
  category: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface UserContextType {
  user: any;
  login: (data: any) => Promise<void>;
  logout: () => void;
}
