import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [user, loading, error] = useAuthState(auth);
	useEffect(() => {
		const handleVisibilityChange = () => {
			if (user && document.visibilityState === "hidden") {
				localStorage.setItem("remainingTime", "3600"); //WIP: set to zero later
				router.push("/thankyou");
			}
		};

		document.addEventListener("visibilitychange", handleVisibilityChange);

		return () => {
			document.removeEventListener("visibilitychange", handleVisibilityChange);
		};
	}, [router]);

	return (
		<RecoilRoot>
			<Head>
				<title>Code Compete</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/logo.png" />
				<meta
					name="description"
					content="Web application to take online coding exams."
				/>
			</Head>
			<ToastContainer />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}
