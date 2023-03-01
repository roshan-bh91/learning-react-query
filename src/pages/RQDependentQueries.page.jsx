import { useQuery } from "react-query";
import axios from "axios";

const fetch_Users = (user_email_Id) => {
  console.log(`http://localhost:4000/users/${user_email_Id}`);
  return axios.get(`http://localhost:4000/users/${user_email_Id}`);
};

const fetch_Channels = (channel_details) => {
  return axios.get(`http://localhost:4000/channels/${channel_details}`);
};

const RQDependentQueries = ({ email }) => {
  console.log(email);
  const { data } = useQuery(["user-details", email], () => fetch_Users(email));
  const channel_details = data?.data.channel;
  const { data: channel_info } = useQuery(
    ["channel-details", channel_details],
    () => {
      return fetch_Channels(channel_details);
    },
    {
      enabled: !!channel_details,
    }
  );
  const courses = channel_info?.data.courses;
  console.log(courses);

  return <div>RQ Dependent Queries</div>;
};
export { RQDependentQueries };
