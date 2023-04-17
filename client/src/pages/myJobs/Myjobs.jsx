import React from "react";
import { Link } from "react-router-dom";
import "./Myjobs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function Myjobs() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ["myJobs"],
    queryFn: () =>
      newRequest.get(`/jobs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/jobs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myJobs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return ( 
    <div className="myjobs">
      {isLoading ? (
        "loading"
      ) : error ? (
        "error"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Jobs</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Job</button>
              </Link>
            )}
          </div>
          <table>
            <tr>
              <th>Image2</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action22</th>
            </tr>
            {data.map((job) => (
              <tr key={job._id}>
                <td>
                  <img className="image" src={job.cover} alt="" />
                </td>
                <td>{job.title}</td>
                <td>{job.price}</td>
                <td>{job.sales}</td>
                <td>
                  <img
                    className="delete"
                    src="./img/delete.png"
                    alt=""
                    onClick={() => handleDelete(job._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default Myjobs;
