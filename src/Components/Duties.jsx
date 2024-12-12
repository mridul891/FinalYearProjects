import img2 from "../assets/ndrf2.jpeg";
 
const Duties = () => {
  return (
    <div className="flex flex-col md:flex-row flex-1 p-4 items-center justify-center md:justify-between">
      {/* Right Column (Text and Image Side-by-Side) */}
      <div className="flex flex-1 items-center justify-center gap-4 md:gap-[3rem] flex-col-reverse md:flex-row lg:flex-row">
        {/* image */}
        <div>
          <img
            src={img2}
            alt="image2"
            className="  md:h-[28rem] md:w-[29rem] object-cover mr-2 md:mr-4 "
          />
        </div>
        {/* data */}
        <div className="flex flex-col items-left gap-5 max-w-sm">
          <h1 className="text-2xl md:text-2xl  text-left font-bold">
            Roles And Responsiblity
          </h1>
          <ol className="text-justify text-lg w-[30rem] ">
            <li>
              <span className="font-bold"> Disaster Response: </span>Conduct
              search, rescue, and relief operations during natural and man-made
              disasters such as earthquakes, floods, cyclones, and industrial
              accidents.
            </li>

            <li>
              <span className="font-bold"> Disaster Preparedness:</span>{" "}
              Organize training, mock drills, and community awareness programs
              to promote disaster preparedness.
            </li>
            <li>
              <span className="font-bold">Capacity Building:</span> Train local
              responders, state disaster forces, and volunteers to enhance
              disaster management capabilities.
            </li>
            <li>
              <span className="font-bold">Medical Assistance:</span> Provide
              medical care, first aid, and evacuation services during
              emergencies.
            </li>
            <li>
              <span className="font-bold">Coordination: </span>Collaborate with
              national and international agencies for effective disaster
              response and recovery.
            </li>
            {/* <li>
                <span className="font-bold">CBRN Response:</span> Handle
                Chemical, Biological, Radiological, and Nuclear (CBRN)
                emergencies with specialized units.
              </li>
              <li>
                <span className="font-bold">Rehabilitation Support:</span>{" "}
                Assist in post-disaster rehabilitation and reconstruction
                efforts.
              </li> */}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Duties;
