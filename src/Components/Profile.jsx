import { Card } from "flowbite-react"
import pp from "../assets/pp.jpg"
import html from "../assets/html5.png"
import css from "../assets/css.png"
import react from "../assets/react.png"

const Profile = () => {
    return (
        <Card className="max-w-4xl mx-auto my-5 bg-white shadow-lg rounded-lg p-6">
            <div className="flex flex-col md:flex-row justify-between px-4 pt-4 items-center md:items-start">
                <div className="flex flex-col items-center pb-10 md:pb-0">
                    <img
                        alt="Profile Image"
                        height="120"
                        src={pp}
                        width="120"
                        className="mb-3 rounded-full shadow-lg"
                    />
                    <h3 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                        Rezky April Ardiansyah
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                        Software Engineer
                    </span>
                </div>
                <div className="flex flex-col md:pl-8 py-4 text-center md:text-left">
                    <h4 className="mb-1 text-lg font-medium text-gray-900 dark:text-white">
                        Contact
                    </h4>
                    <p>Phone: +62 821-1727-7977</p>
                    <p>Email: tryrezky871@gmail.com</p>
                    <p>
                        GitHub:{" "}
                        <a
                            href="https://github.com/rynskie"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 underline"
                        >
                            github.com/rynskie
                        </a>
                    </p>
                </div>
            </div>
            <div className="py-4">
                <h4 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Professional Summary
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    Saya adalah seorang siswa kelas 11 yang memiliki semangat tinggi
                    untuk belajar dan berkembang. Selain menempuh pendidikan, saya
                    memiliki hobi bermain game, khususnya <em>Mobile Legends</em>, yang
                    mengajarkan saya tentang kerja tim, strategi, dan daya saing kuat.
                    Saya bercita-cita untuk mengembangkan keterampilan di bidang
                    teknologi dan kreatif, dengan harapan dapat mengejar karier yang
                    relevan di masa depan.
                </p>
            </div>
            <div className="py-4">
                <h4 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
                    Skills
                </h4>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                    <li>Kerjasama Tim</li>
                    <li>Strategi</li>
                    <li>Komunikasi</li>
                </ul>
            </div>
            <div className="py-4 grid grid-cols-3 gap-6 justify-items-center">
                <img
                    src={html}
                    alt="HTML Logo"
                    className="h-16 w-16 object-contain"
                />
                <img
                    src={css}
                    alt="CSS Logo"
                    className="h-16 w-16 object-contain"
                />
                <img
                    src={react}
                    alt="React Logo"
                    className="h-16 w-16 object-contain"
                />
            </div>
        </Card>
    );
};

export default Profile;