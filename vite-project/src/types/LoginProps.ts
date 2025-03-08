export interface LoginProps {
    name: string;
    password: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }