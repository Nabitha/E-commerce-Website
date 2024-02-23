type PropsTypes = {
    error?: string;
    type?: string;
    children: React.ReactNode;
    isBlurred: boolean;
    
};

const Layout = ({error,type,children,isBlurred}:PropsTypes) => {
  return (
    <div
          
        >
            <div
               
            >
                {children}
            </div>
            <div className=" text-red-500 text-start text-sm">{error && isBlurred && error}</div>
        </div>
    );
};

export default Layout;
