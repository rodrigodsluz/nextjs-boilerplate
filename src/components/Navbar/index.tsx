import { FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IconContext } from 'react-icons/lib';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import NProgress from 'nprogress';
import Services from '../../services';
import {
  NavbarContainer,
  NavbarContent,
  NavbarLogo,
  NavbarIcon,
  NavbarMenuText,
  NavbarMobileMenuIcon,
  NavbarMenu,
  NavbarItem,
  NavbarLinks,
  NavbarItemBtn,
  SignUpBtn,
  ToastMessage,
} from './styles';
import SearchBar from '../SearchBar';
import { routes } from '../../routes';

const Navbar = (): JSX.Element => {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeStart', () => NProgress.start());
    router.events.on('routeChangeComplete', () => NProgress.done());
    router.events.on('routeChangeError', () => NProgress.done());
  }, []);

  const [mobileIconClick, setMobileIconClick] = useState(false);
  const isSearchBar = true;

  const handleMobileIconClick = () => setMobileIconClick(!mobileIconClick);
  // const handleSearchBarClick = () => setIsSearchBar(true);
  const closeMobileMenu = () => setMobileIconClick(false);

  const isActive = (path?) => {
    if (router.pathname === path) {
      return {
        color: '#4b59f7',
        background: '#101522',
        border: '1px solid blue',
        borderRadius: '25px',
        padding: '3px 5px',
      };
    }
  };

  const notifySuccess = (message) =>
    toast(<ToastMessage toastType="success">{message}</ToastMessage>, {
      type: toast.TYPE.SUCCESS,
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: 1000,
      closeButton: true,
      hideProgressBar: false,
    });

  const handleSignOut = async () => {
    const response = await Services.auth.signout(() =>
      router.replace(routes.signin));
    if (response.error) {
      notifySuccess(response.message.error);
    } else {
      notifySuccess(response);
    }
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <NavbarContainer>
        <NavbarContent>
          <Link href={routes.home}>
            <NavbarLogo>
              <NavbarIcon />
              <NavbarMenuText>Lifeasier</NavbarMenuText>
            </NavbarLogo>
          </Link>

          <NavbarMobileMenuIcon onClick={handleMobileIconClick}>
            {mobileIconClick ? <FaTimes /> : <FaBars />}
          </NavbarMobileMenuIcon>

          <NavbarMenu
            onClick={!isSearchBar ? handleMobileIconClick : null}
            mobileClick={mobileIconClick}
          >
            <NavbarItem>
              {' '}
              <SearchBar />
            </NavbarItem>

            <NavbarItem>
              <Link href="/blogs">
                <NavbarLinks onClick={closeMobileMenu}>
                  <NavbarMenuText style={isActive('/blogs')}>
                    Blogs
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            {Services.auth.isAuth() && Services.auth.isAuth().role === 0 && (
              <NavbarItem>
                <Link href={routes.user}>
                  <NavbarLinks onClick={closeMobileMenu}>
                    <NavbarMenuText style={isActive('/user')}>{`${
                      Services.auth.isAuth().name
                    }'s Dashboard`}</NavbarMenuText>
                  </NavbarLinks>
                </Link>
              </NavbarItem>
            )}

            {Services.auth.isAuth() && Services.auth.isAuth().role === 1 && (
              <NavbarItem>
                <Link href="/admin">
                  <NavbarLinks onClick={closeMobileMenu}>
                    <NavbarMenuText style={isActive('/admin')}>{`${
                      Services.auth.isAuth().name
                    }'s Dashboard`}</NavbarMenuText>
                  </NavbarLinks>
                </Link>
              </NavbarItem>
            )}

            <NavbarItem>
              <Link href="/user/crud/blog">
                <NavbarLinks>
                  <NavbarMenuText style={isActive('/user/crud/blog')}>
                    Write a Blog
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href="/contacts">
                <NavbarLinks>
                  <NavbarMenuText style={isActive('/contact')}>
                    Contact
                  </NavbarMenuText>
                </NavbarLinks>
              </Link>
            </NavbarItem>

            {!Services.auth.isAuth() && (
              <>
                <NavbarItem>
                  <Link href="/signin">
                    <NavbarLinks onClick={closeMobileMenu}>
                      <NavbarMenuText style={isActive('/signin')}>
                        Sign in
                      </NavbarMenuText>
                    </NavbarLinks>
                  </Link>
                </NavbarItem>

                <NavbarItemBtn>
                  <Link href="/signup">
                    <NavbarLinks onClick={closeMobileMenu}>
                      <SignUpBtn style={isActive('/signup')}>SIGN UP</SignUpBtn>
                    </NavbarLinks>
                  </Link>
                </NavbarItemBtn>
              </>
            )}

            {Services.auth.isAuth() && (
              <NavbarItem>
                <Link href="/signin">
                  <NavbarLinks onClick={handleSignOut}>
                    <NavbarMenuText>Sign out</NavbarMenuText>
                  </NavbarLinks>
                </Link>
              </NavbarItem>
            )}
          </NavbarMenu>
        </NavbarContent>
      </NavbarContainer>
    </IconContext.Provider>
  );
};

export default Navbar;
