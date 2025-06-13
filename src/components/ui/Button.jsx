export const Button = ({ children, onclick, size = "md" }) => {

    // definir clases segun tamaño
    const sizeClasses = {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-4 text-base",
        lg: "py-3 px-6 text-lg",
    }

    return (
        <button
            className={`bg-white text-gray-500 border-red-400 rounded shadow ${sizeClasses[size]}`}
            onClick={onclick}>
            {children}
        </button>
    );
}