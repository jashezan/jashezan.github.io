import { Fragment } from "react";
import skillsList from "../assets/skillsList";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Skills() {
  return (
    <section
      name="skills"
      className="w-full min-h-screen px-4 sm:px-6 lg:px-8 backdrop-blur-lg"
    >
      <div className="mx-10 md:mx-24 xl:mx-80">
        <h2 className="text-white text-4xl text-center mb-4">Skills</h2>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <table className="min-w-full divide-y divide-slate-800 text-white bg-slate-800">
              <thead className="bg-slate-900">
                <tr className="text-xl">
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left font-semibold"
                  >
                    Stack
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left font-semibold"
                  >
                    Technologies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700">
                {skillsList.map((skill, index) => {
                  return (
                    <tr key={index}>
                      <td
                        scope="col"
                        className="px-3 py-3.5 text-left md:text-lg font-semibold"
                      >
                        {skill.category}
                      </td>
                      <td
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold grid grid-cols-2 md:grid-cols-7 gap-2 md:gap-4"
                      >
                        {skill.members.map((el, idx) => {
                          return (
                            <span key={idx}>
                              <a
                                href={el.certificate}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative flex justify-center"
                              >
                                <img
                                  src={el.icon}
                                  alt={el.name}
                                  loading="lazy"
                                  className="w-6 mx-1 bg-slate-600 md:w-10 "
                                />
                                <span className="absolute bottom-10 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 z-50">
                                  {el.name}
                                </span>
                              </a>
                            </span>
                          );
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
