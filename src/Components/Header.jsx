const Header = () => {
    return (
        <header class="text-gray-600 body-font z-10 fixed top-0 w-full bg-white">
            <div class="container mx-auto flex lg:py-4 lg:px-16 py-2 px-4 items-center justify-between">
                <a class="flex title-font font-medium items-center text-gray-900 justify-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        class="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg>
                    <span class="ml-3 lg:text-xl text-lg">NotesBook</span>
                </a>
            </div>
        </header>
    );
};

export default Header;
