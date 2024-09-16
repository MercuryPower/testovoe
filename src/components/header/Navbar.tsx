import React from 'react';
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Menu} from "lucide-react";
const Navbar = () => {
    return (
        <header>
            <nav className={'pt-6 pb-2 md:pb-0 pl-6 pr-6 flex space-x-12 justify-between'}>
                <h1 className={'font-bold md:text-xl self-center'}>HarmonyHR</h1>
                <ul className={'mt-2 gap-x-2 hidden xl:flex '}>
                    <li className={'rounded-t-xl p-2'}>
                        Home
                    </li>
                    <li className={'border rounded-t-xl p-2 bg-[#DAE6F2]'}>
                        My Info
                    </li>
                    <li className={'rounded-t-xl p-2'}>
                        People
                    </li>
                    <li className={'rounded-t-xl p-2'}>
                        Hiring
                    </li>
                    <li className={'rounded-t-xl p-2'}>
                        Reports
                    </li>
                    <li className={'rounded-t-xl p-2'}>
                        Files
                    </li>
                </ul>
                <div className={'flex items-center align-middle'}>
                    <input className={'md:w-96   w-12 placeholder-black  text-black rounded-2xl p-2 pl-10 h-10 border-2 border-black'} placeholder={`Search`}/>
                    <svg className={'absolute focus:hidden flex ml-4'} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.73461 1.60122C5.46157 1.6022 4.24106 2.10886 3.34158 3.00973C2.4421 3.9106 1.93733 5.13189 1.93832 6.40493C1.9388 7.03527 2.06344 7.65935 2.30511 8.24152C2.54679 8.8237 2.90076 9.35258 3.34683 9.79795C3.79289 10.2433 4.32231 10.5965 4.90486 10.8373C5.48741 11.078 6.11168 11.2017 6.74202 11.2012C7.37237 11.2007 7.99645 11.0761 8.57862 10.8344C9.1608 10.5927 9.68967 10.2388 10.135 9.79271C10.5804 9.34664 10.9336 8.81722 11.1744 8.23467C11.4151 7.65212 11.5388 7.02786 11.5383 6.39751C11.5373 5.12447 11.0307 3.90396 10.1298 3.00448C9.22894 2.10501 8.00765 1.60024 6.73461 1.60122ZM2.20934 1.87923C3.40864 0.678073 5.03599 0.00253157 6.73337 0.00122027C8.43076 -9.10382e-05 10.0591 0.672935 11.2603 1.87224C12.4615 3.07155 13.137 4.69889 13.1383 6.39627C13.139 7.23673 12.9741 8.06909 12.653 8.84582C12.4344 9.37486 12.1462 9.87104 11.797 10.3216L16.1104 14.6283C16.423 14.9405 16.4234 15.447 16.1112 15.7597C15.7991 16.0723 15.2925 16.0727 14.9799 15.7605L10.6665 11.4539C10.2165 11.8037 9.72076 12.0927 9.19206 12.3122C8.41582 12.6344 7.58372 12.8006 6.74326 12.8012C5.9028 12.8019 5.07044 12.637 4.29371 12.3159C3.51698 11.9949 2.81108 11.524 2.21633 10.9302C1.62158 10.3364 1.14961 9.6312 0.827381 8.85496C0.505151 8.07873 0.338968 7.24662 0.338318 6.40616C0.337007 4.70878 1.01003 3.08039 2.20934 1.87923Z" fill="#1C3144"/>
                    </svg>
                </div>
                <div className={'flex justify-center items-center self-center gap-x-6'}>
                    <a className={'cursor-pointer hidden md:flex'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.82343 2.49767C9.6319 -0.83256 14.3681 -0.832555 15.1766 2.49767C15.3154 3.06947 15.9705 3.34083 16.473 3.03466C19.3995 1.25151 22.7485 4.60051 20.9653 7.52702C20.6592 8.0295 20.9305 8.68461 21.5023 8.82342C24.8326 9.6319 24.8326 14.3681 21.5023 15.1766C20.9305 15.3154 20.6592 15.9705 20.9653 16.473C22.7485 19.3995 19.3995 22.7485 16.473 20.9653C15.9705 20.6592 15.3154 20.9305 15.1766 21.5023C14.3681 24.8326 9.6319 24.8326 8.82343 21.5023C8.68461 20.9305 8.0295 20.6592 7.52702 20.9653C4.60052 22.7485 1.25151 19.3995 3.03466 16.473C3.34083 15.9705 3.06948 15.3154 2.49767 15.1766C-0.832555 14.3681 -0.83256 9.6319 2.49767 8.82342C3.06947 8.68461 3.34083 8.0295 3.03466 7.52702C1.25151 4.60051 4.60051 1.25151 7.52702 3.03466C8.0295 3.34083 8.68461 3.06947 8.82343 2.49767ZM12.8443 3.06387C12.6294 2.17871 11.3706 2.17871 11.1557 3.06387C10.6334 5.21516 8.16871 6.23607 6.27823 5.08418C5.50037 4.61022 4.61022 5.50037 5.08418 6.27823C6.23607 8.16871 5.21516 10.6334 3.06387 11.1557C2.17871 11.3706 2.17871 12.6294 3.06387 12.8443C5.21516 13.3666 6.23607 15.8313 5.08418 17.7218C4.61023 18.4996 5.50037 19.3898 6.27823 18.9158C8.16871 17.7639 10.6334 18.7848 11.1557 20.9361C11.3706 21.8213 12.6294 21.8213 12.8443 20.9361C13.3666 18.7848 15.8313 17.7639 17.7218 18.9158C18.4996 19.3898 19.3898 18.4996 18.9158 17.7218C17.7639 15.8313 18.7848 13.3666 20.9361 12.8443C21.8213 12.6294 21.8213 11.3706 20.9361 11.1557C18.7848 10.6334 17.7639 8.16871 18.9158 6.27823C19.3898 5.50037 18.4996 4.61023 17.7218 5.08418C15.8313 6.23607 13.3666 5.21516 12.8443 3.06387ZM12 9.6C10.6745 9.6 9.6 10.6745 9.6 12C9.6 13.3255 10.6745 14.4 12 14.4C13.3255 14.4 14.4 13.3255 14.4 12C14.4 10.6745 13.3255 9.6 12 9.6ZM7.2 12C7.2 9.34903 9.34903 7.2 12 7.2C14.651 7.2 16.8 9.34903 16.8 12C16.8 14.651 14.651 16.8 12 16.8C9.34903 16.8 7.2 14.651 7.2 12Z" fill="#1C3144"/>
                        </svg>
                    </a>
                    <a className={'cursor-pointer hidden md:flex'}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2.4C9.45392 2.4 7.01212 3.41143 5.21177 5.21178C3.41143 7.01212 2.4 9.45392 2.4 12C2.4 13.2607 2.64831 14.509 3.13076 15.6738C3.6132 16.8385 4.32033 17.8968 5.21177 18.7882C6.10322 19.6797 7.16151 20.3868 8.32624 20.8692C9.49096 21.3517 10.7393 21.6 12 21.6C13.2607 21.6 14.509 21.3517 15.6738 20.8692C16.8385 20.3868 17.8968 19.6797 18.7882 18.7882C19.6797 17.8968 20.3868 16.8385 20.8692 15.6738C21.3517 14.509 21.6 13.2607 21.6 12C21.6 9.45392 20.5886 7.01212 18.7882 5.21178C16.9879 3.41143 14.5461 2.4 12 2.4ZM3.51472 3.51472C5.76516 1.26428 8.8174 0 12 0C15.1826 0 18.2348 1.26428 20.4853 3.51472C22.7357 5.76516 24 8.8174 24 12C24 13.5759 23.6896 15.1363 23.0866 16.5922C22.4835 18.0481 21.5996 19.371 20.4853 20.4853C19.371 21.5996 18.0481 22.4835 16.5922 23.0866C15.1363 23.6896 13.5759 24 12 24C10.4241 24 8.86371 23.6896 7.4078 23.0866C5.95189 22.4835 4.62902 21.5996 3.51472 20.4853C2.40042 19.371 1.5165 18.0481 0.913446 16.5922C0.310389 15.1363 0 13.5759 0 12C7.15256e-08 8.8174 1.26428 5.76516 3.51472 3.51472ZM12 7.2C10.2337 7.2 8.96626 8.04755 8.55911 8.91154C8.27659 9.51105 7.56157 9.76802 6.96206 9.48551C6.36255 9.20299 6.10558 8.48797 6.38809 7.88846C7.29854 5.95645 9.58549 4.8 12 4.8C13.5604 4.8 15.019 5.27264 16.1146 6.09439C17.2105 6.91647 18 8.14363 18 9.6C18 12.0842 15.7984 13.8097 13.4192 14.2668C13.3316 14.2837 13.262 14.3269 13.2244 14.3667C13.2074 14.3846 13.2015 14.3968 13.2002 14.3999C13.2001 14.4001 13.2003 14.3998 13.2002 14.3999C13.2 15.0625 12.6626 15.6 12 15.6C11.3373 15.6 10.8 15.0627 10.8 14.4C10.8 13.0277 11.8928 12.116 12.9667 11.9099C14.7345 11.5701 15.6 10.4758 15.6 9.6C15.6 9.06797 15.3155 8.49513 14.6744 8.01431C14.033 7.53316 13.0916 7.2 12 7.2ZM10.8 18C10.8 17.3373 11.3373 16.8 12 16.8H12.012C12.6747 16.8 13.212 17.3373 13.212 18C13.212 18.6627 12.6747 19.2 12.012 19.2H12C11.3373 19.2 10.8 18.6627 10.8 18Z" fill="#1C3144"/>
                        </svg>
                    </a>
                    <a className={'cursor-pointer hidden md:flex'}>
                        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.02513 1.05442C8.68151 0.379285 9.57174 0 10.5 0C11.4283 0 12.3185 0.379285 12.9749 1.05442C13.5383 1.63398 13.8898 2.39081 13.9781 3.19746C15.2506 3.81383 16.3513 4.76008 17.1684 5.94922C18.1434 7.36795 18.6668 9.06264 18.6666 10.8C18.6666 10.8 18.6666 10.8 18.6666 10.8V14.5896C18.6666 14.7522 18.6977 14.9135 18.7582 15.0637C18.8187 15.214 18.9073 15.3505 19.0191 15.4655C19.0191 15.4654 19.0191 15.4655 19.0191 15.4655L20.6583 17.1515C20.9919 17.4947 21.0917 18.0108 20.9112 18.4592C20.7306 18.9076 20.3052 19.2 19.8333 19.2H15.1667C15.1667 20.473 14.675 21.6939 13.7998 22.5941C12.9247 23.4943 11.7377 24 10.5 24C9.26233 24 8.07535 23.4943 7.20018 22.5941C6.32501 21.6939 5.83335 20.473 5.83335 19.2H1.1667C0.694826 19.2 0.269418 18.9076 0.088841 18.4592C-0.0917362 18.0108 0.0080785 17.4947 0.341742 17.1515L1.9809 15.4655C2.20663 15.2333 2.33336 14.9181 2.33336 14.5908V10.8C2.33336 7.43913 4.25266 4.54103 7.02192 3.1977C7.1101 2.39095 7.46162 1.63404 8.02513 1.05442ZM17.0606 16.8C16.8744 16.5495 16.7202 16.2745 16.6024 15.9819C16.4247 15.5405 16.3333 15.0674 16.3333 14.5896C16.3333 14.5895 16.3333 14.5897 16.3333 14.5896V10.8C16.3335 9.55885 15.9595 8.34803 15.2631 7.33451C14.5666 6.32099 13.5817 5.55447 12.4442 5.14048C11.9782 4.97089 11.6667 4.51764 11.6667 4.0092V3.6C11.6667 3.28174 11.5437 2.97652 11.325 2.75147C11.1062 2.52643 10.8094 2.4 10.5 2.4C10.1906 2.4 9.89384 2.52643 9.67505 2.75147C9.45625 2.97652 9.33334 3.28174 9.33334 3.6V4.0092C9.33334 4.5177 9.02174 4.971 8.55565 5.14054C6.28867 5.96516 4.66669 8.19001 4.66669 10.8V14.5908C4.66669 15.3932 4.4085 16.169 3.9394 16.8H17.0606ZM8.16667 19.2C8.16667 19.8365 8.41251 20.447 8.85009 20.8971C9.28767 21.3471 9.88116 21.6 10.5 21.6C11.1188 21.6 11.7123 21.3471 12.1499 20.8971C12.5875 20.447 12.8333 19.8365 12.8333 19.2H8.16667Z" fill="#1C3144"/>
                        </svg>
                    </a>
                    <div className={'flex items-center gap-x-4'}>
                        <Menu className={'flex md:hidden'} />
                        <a href={'/logOut'}>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </a>

                    </div>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;