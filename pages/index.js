import Head from "next/head";
import { useState, useEffect, Fragment } from "react";
import Copyright from "../components/Copyright";
import Dashboard from "../helpers/Dashboard";
import Login from "../helpers/Login";



// export async function getServerSideProps(ctx) {
//   // let loginUrlObj = {
//   //   url: `${apiService.BASE}${apiService.LOGIN}`,
//   //   body: {
//   //     company_id: "hello",
//   //     access_key: "world",
//   //   },
//   //   type: "post",
//   // };

//   // let responseData = await networkCallService.commonApiService(loginUrlObj);

//   // return {
//   //   props: {
//   //     responseData: responseData,
//   //   },
//   // };
// }
export default function Home(props) {
  // let responseData = props.responseData;
  const [loading, setLoading] = useState(true);
  const [loggedInData, setLoggedInData] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("loggedIn")) {
      setLoggedInData(JSON.parse(localStorage.getItem("loggedIn")));
    }
    setLoading(false);
  }, []);

  return (
    <div className="layout primary2Background">
      <Head>
        <title>Edvora</title>
        <meta name="description" content="Edvora Assessment01 - Aish Gopalia" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      {!loading && (
        <Fragment>
          {loggedInData ? (
            <Fragment>
              <Dashboard data={loggedInData} />
             
            </Fragment>
          ) : (
            <Login containerData={{ setLoggedInData: setLoggedInData }} />
          )}
        </Fragment>
      )}
    </div>
  );
}
