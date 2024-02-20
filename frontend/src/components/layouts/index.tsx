import { Container } from '@chakra-ui/react';
import { ReactElement } from 'react';

type LayoutProps = {
    children: ReactElement | ReactElement[];
}
const Layout = ({ children }: LayoutProps) => {
    return (
        <Container maxW='container.2xl' w={{ base: "100%" }}>
            {children}
        </Container>
    )
}

export default Layout;