interface buttonProps {
  children: React.ReactNode;
  onClick(): void;
}

export default function Button(props: buttonProps) {
  return (
    <button className="btn btn-primary" onClick={props.onClick}>
      {props.children}
    </button>
  );
}
