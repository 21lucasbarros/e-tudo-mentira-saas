interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  noValidate?: boolean;
}

export default function Form({
  children,
  onSubmit,
  className,
  noValidate,
}: FormProps) {
  return (
    <>
      <form className={className} onSubmit={onSubmit} noValidate={noValidate}>
        {children}
      </form>
    </>
  );
}
