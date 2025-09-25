import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

const Users = () => {
  const [users, setUsers] = useState<UserProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getStaticProps = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();

        // Map API response to match UserProps
        const formatted: UserProps[] = data.map((user: any) => ({
          name: user.name,
          email: user.email,
          address: {
            street: user.address.street,
            city: user.address.city,
            zipcode: user.address.zipcode,
          },
          phone: user.phone,
          website: user.website,
        }));

        setUsers(formatted);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    getStaticProps();
  }, []);

  return (
    <>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Users</h1>

        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : (
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg::grid-cols-4 gap-6">
            {users.map((user, index) => (
              <UserCard
                key={index}
                name={user.name}
                email={user.email}
                address={user.address}
                phone={user.phone}
                website={user.website}
              />
            ))}
          </section>
        )}
      </div>
    </>
  );
};

export default Users;
