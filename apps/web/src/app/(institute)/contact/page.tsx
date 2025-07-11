import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="w-full text-title-3 font-normal max-w-xl md:max-w-3xl xl:max-w-5xl mx-auto px-4 md:px-8">
        <h1 className="text-main-title text-main my-6 md:my-12 font-bold">
          Contact Us
        </h1>

        <div className="">
          For directions, transportation options, and campus access details,
          visit our{" "}
          <Link
            className="text-main underline"
            href={"/institute/campus/how-to-reach/"}
          >
            How to Reach Us
          </Link>{" "}
          page. To check office timings and availability, refer to our{" "}
          <Link
            className="text-main underline"
            href={"/institute/campus/working-hours/"}
          >
            Working Hours
          </Link>{" "}
          section. For specific office locations, consult the campus map or
          departmental websites.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8 md:my-16">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-large-title font-semibold text-main">
              Institute Address
            </h2>

            <ul className="list-none">
              <li>Indian Institute of Information Technology Dharwad,</li>
              <li>Ittigatti Rd, near Sattur Colony, Karnataka 580009</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-large-title font-semibold text-main">
              Institute Phone
            </h2>

            <ul className="list-none">
              <li>8362250879</li>
              <li>9449732959</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 md:my-16">
          {/* Working Hours */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Working Hours
            </h2>
            <ul className="list-none">
              <li>Monday – Friday: 9:00 AM – 5:30 PM</li>
              <li>Saturday – Sunday: Closed</li>
              <li>Holidays: As per the official institute calendar</li>
            </ul>
          </div>

          {/* Undergraduate Admissions */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Undergraduate Admissions
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Graduate (Ph.D.) Admissions */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Graduate (Ph.D.) Admissions
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Placements & Internships */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Placements & Internships
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:cgc@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  cgc@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Student Verification */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Student Verification
            </h2>
            <ul className="list-none">
              <li>
                Undergraduate (UG):
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
              <li>
                Ph.D.:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Career Guidance & Corporate Relations */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Career Guidance & Corporate Relations (CGC Office)
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:cgcoffice@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  cgcoffice@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* IT Support & Tech Assistance */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              IT Support & Tech Assistance
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Campus Security */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Campus Security
            </h2>
            <ul className="list-none">
              <li>Phone: +91 836 2250879</li>
              <li>Emergency: Call local emergency services (112)</li>
            </ul>
          </div>

          {/* Marketing & Public Relations */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Marketing & Public Relations
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Human Resources */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Human Resources
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Library Services */}
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-title-1 font-semibold text-main">
              Library Services
            </h2>
            <ul className="list-none">
              <li>
                Email:
                <a
                  href="mailto:contact@iiitdwd.ac.in"
                  className="text-main underline"
                >
                  contact@iiitdwd.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
