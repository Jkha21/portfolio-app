import icon from './../../assets/user.png';

const Header = () => {
    return (
        <>
            <div className="flex h-screen items-center dark:bg-gray-800 dark:text-white text-3xl flex-col py-10 font-serif gap-8">
                <div>                    
                    <div>
                        <span>Department of Structural Enginering</span>
                        <span>Rubel Das</span>
                    </div>
                        <img src={icon} alt="image" className='h-16 bg-white p-2 border rounded-3xl'/>
                    </div>
            </div>
        </>
    )
};

export default Header;