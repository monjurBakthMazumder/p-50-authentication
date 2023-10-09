import { useLoaderData } from "react-router-dom";
import Phone from "../../Component/Phone/Phone";
import useAuth from "../../Hock/useAuth";
import EmailVerification from "../../Component/EmailVerification/EmailVerification";

const Phones = () => {
    const {user} = useAuth()
    const allPhones = useLoaderData()
    const phones = allPhones.data;
    return (
        <>
        {
            !user?.emailVerified
            ?
            <EmailVerification/>
            :
            <div className=" my-10 px-[5%]">
                <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold underline text-center">phones: {phones?.length}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 my-10">
                    {
                        phones?.map(phone=> 
                            <Phone
                                key={phone.slug}
                                Phone={phone}
                            />
                        )
                    }
                </div>
            </div>
        }
        </>
    );
};

export default Phones;