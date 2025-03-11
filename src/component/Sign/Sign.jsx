import { useNavigate } from "react-router-dom";
import { postData } from "./server";
import { useState } from "react";
import { toast } from "react-toastify";
import styles from "./Sign.module.css";

function Sign() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    mobile: "",
    email: "",
    password: "",
  });

  const mobileerr = /^[0-9]{10}$/;
  const emailer = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
  const passerr = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  async function handleSubmit(e) {
    e.preventDefault();
    toast.dismiss();

    if (!formData.firstname.trim()) return toast.error("Please enter Firstname");
    if (!formData.lastname.trim()) return toast.error("Please enter Lastname");
    if (!formData.mobile.trim() || !mobileerr.test(formData.mobile))
      return toast.error("Please enter a valid Mobile No");
    if (!formData.email.trim() || !emailer.test(formData.email))
      return toast.error("Please enter a valid Email");
    if (!formData.password.trim() || !passerr.test(formData.password))
      return toast.error("Password must be at least 8 characters long and contain at least 1 letter, 1 number, and 1 special character");

    try {
      await postData(formData);
      setFormData({ firstname: "", lastname: "", mobile: "", email: "", password: "" });
      toast.success("User added successfully!");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add user.");
    }
  }

  function handleChange(e) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  return (
    <div>
      <div className="row">
        <div className="col-5 m-auto">
          <form onSubmit={handleSubmit}>
            <input type="text" className="form-control mb-3" placeholder="Firstname" name="firstname" value={formData.firstname} onChange={handleChange} />
            <input type="text" className="form-control mb-3" placeholder="Lastname" name="lastname" value={formData.lastname} onChange={handleChange} />
            <input type="text" className="form-control mb-3" placeholder="Mobile No" name="mobile" value={formData.mobile} onChange={handleChange} />
            <input type="email" className="form-control mb-3" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
            <input type="password" className="form-control mb-3" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
            <button type="submit" className="btn btn-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
