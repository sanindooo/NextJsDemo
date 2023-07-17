import "../styles/globals.css";
import Layout from "../components/layout/Layout";

// acts as root project
// compoent - page content that will be rendered
// pageProps - different props for component
function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
