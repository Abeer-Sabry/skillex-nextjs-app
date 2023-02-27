import Image from "next/image";

const CustomerCard = ({ id, feedback, imgUrl, name, job }) => {
  return (
    <div className="bg-white p-[10px] rounded-2xl cursor-pointer">
      <p className="text-[#7e7e7e] mb-[30px] text-[15px]">{feedback}</p>
      <div className="flex items-center">
        <Image
          src={imgUrl}
          alt={name}
          width={50}
          height={50}
          className="object-cover rounded-full mr-[10px]"
        />
        <div>
          <h4 className="font-semibold text-[14px]">{name}</h4>
          <p className="text-[#8FB67B] text-[14px] font-semibold capitalize">{job}</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
