import { useQuery } from "react-query";
import { getUsers } from "../../services/users.service";
import UserList from "../../components/UserList/UserList";

const Home = () => {
  const { data, isLoading, error } = useQuery("QueryProvider", getUsers);

  if (isLoading) {
    return (
      <section>
        <p>Loading ...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <p>{error.message}</p>
      </section>
    );
  }

  return (
    <section>
      <h1>Home</h1>
      <UserList data={data.data} />
    </section>
  );
};

export default Home;
