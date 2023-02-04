interface buttonProps{
    children: React.ReactNode;
}

export default function Button(props: buttonProps){
      
      return <button className="btn btn-primary">{props.children}</button>
}

