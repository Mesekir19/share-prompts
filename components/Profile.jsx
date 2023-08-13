import PormptCard from "./PormptCard"

const Profile = ({name, desc, data, handleEdit, handleDelete}) => {
  return (
    <section className="w-full">
      <h1 className=" head_text text-left">
        <p className=" blue_gradient">{name} Profile</p>
      </h1>
      <p className=" desc text-left">{desc}</p>
      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PormptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
}

export default Profile