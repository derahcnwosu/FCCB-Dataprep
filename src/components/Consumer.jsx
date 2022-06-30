import React, {useState} from "react";
import { FlatfileButton, FlatfileResults } from "@flatfile/react";
import {Link} from 'react-router-dom'

export const Consumer = () => {
    const license = '6fe1e94e-ae46-448d-938f-e30265c4575b'
    const [results, setResults] = useState(FlatfileResults);
  return (
    <div>
      <Link to= '/' className="back-link">GO BACK</Link>
      <h1 className="lead-txt">Import consumer file</h1>
      <FlatfileButton
        settings={{
            type: "test import",
            fields: [
                { label: "fname", key: "First Name" },
                { label: "mname", key: "Middle Name" },
                {label: "sname", key: "Surname"},
                { label: "spouse_surname", key: "Spouse Surname" },
                { label: "spouse_first_name", key: "Spouse First Name" },
                {label: "spouse_middle_name", key: "Spouse Middle Name"},
                { label: "primary_address_line_1", key: "Primary Address Line 1", alternates: ["Primary Address Line 1", "PrimaryAddressLine1", "Primary_Address_Line_1"] },
                { label: "primary_address_line_2", key: "Primary Address Line 2", alternates: ["Primary Address Line 2", "PrimaryAddressLine2", "Primary_Address_Line_2"] },
                { label: "primary_address_city_lga", key: "Primary City LGA", alternates: ["Primary Address City LGA", "Primary City LGA", "PrimaryAddressCityLGA", "Primary_Address_City_Lga"] },
                { label: "secondary_address_line_1", key: "Secondary Address Line 1", alternates: ["Secondary Address Line 1", "SecondaryAddressLine1", "Secondary_Address_Line_1"] },
                { label: "secondary_address_line_2", key: "Secondary Address Line 2", alternates: ["Secondary Address Line 2", "SecondaryAddressLine2", "Secondary_Address_Line_2"] },
                { label: "secondary_address_city_lga", key: "Secondary City LGA", alternates: ["Secondary Address City LGA", "Secondary City LGA", "SecondaryAddressCityLGA", "Secondary_Address_City_Lga"] },
                { label: "employer_address_line_1", key: "Employer Address Line 1", alternates: ["Employer Address Line 1", "EmployerAddressLine1", "Employer_Address_Line_1"] },
                { label: "employer_address_line_2", key: "Employer Address Line 2", alternates: ["Employer Address Line 2", "EmployerAddressLine2", "Employer_Address_Line_2"] },
                { label: "employer_address_city_lga", key: "Employer City LGA", alternates: ["Employer Address City LGA", "Employer City LGA", "EmployerAddressCityLGA", "Secondary_Address_City_Lga"] },
                { label: "employer_address", key: "Employer Address"},
                {label: "date_of_birth", key: "Date Of Birth", alternates: ["DOB"]},
                {label: "mobile_number", key: "Mobile Number", alternates: ["Mobile No"]},
                {label: "Email Address", key: "Email Address"},
                {label: "CustomerID", key: "Customer ID", alternates: ["Customer ID"]},
                {label: "National Identification No", key: "NIN", alternates: ["National Identification Number"]},
                {label: "BVN No", key: "BVN", alternates: ["Bank Verification No"]},
                {label: "drivers_license_number", key: "Drivers License Number"},
                {label: "Branch Code", key: "Branch Code", alternates: ["BRANCH CODE", "branch_code"]},
                {label: "passport_no", key: "Passport No", alternates: ["Passport_No", "Passport Number"]},
                {label: "pencom_id_number", key: "PENCOMIDNUMBER", alternates: ["Pencom ID No"]},
                {label: "other_id", key: "OTHER ID", alternates: ["Other ID"]},
                {label: "mobile_number", key: "Mobile Number", alternates: ["mobile_no"]},
                {label: "employment_status", key: "Employment Status", alternates: ["Employment Status"]},
                {label: "occupation", key: "Occupation", alternates: ["Employment Status"]},
                {label: "business_category", key: "Business Category"},
                {label: "business_sector", key: "Business Sector"},
                {label: "borrower_type", key: "Borrower Type"},
                {label: "tax_id", key: "Tax ID"},
                {label: "picture_file_path", key: "Picture File Path"},
                {label: "employer_name", key: "Employer Name"},
                {label: "title", key: "Title"},
                {label: "place_of_birth", key: "Place Of Birth"},
                {label: "work_telephone", key: "Work Telephone", alternates: ["work_phone"]},
                {label: "home_telephone", key: "Home Telephone", alternates: ["home_phone"]},
                {label: "account_number", key: "Acount Number", alternates: ["account_no"]},

                {
                  label: "Primary State",
                  key: "Primary State",
                  type: "select",
                  alternates: ["Primary State", "Primary_State", "primary_state", "primarystate", "state", "State"],
                  options: [
                    { value: "Abia", label: "001" },
                    { value: "Adamawa", label: "002" },
                    { value: "Akwa-Ibom", label: "003" },
                    { value: "Anambra", label: "004" },
                    { value: "Bauchi", label: "005", alternates: ["BAUCHI", "bauchi"] },
                    { value: "Bayelsa", label: "006", alternates: ["BAYELSA", "bayelsa"] },
                    { value: "Benue", label: "007", alternates: ["BENUE", "benue"] },
                    { value: "Borno", label: "008", alternates: ["BORNO", "borno", "bornu", "BORNU"] },
                    { value: "cross_river", label: "009", alternates: ["CROSS-RIVER", "Cross River", "Cross-River"] },
                    { value: "delta", label: "010", alternates: ["Delta", "DELTA"] },
                    { value: "ebonyi", label: "011", alternates: ["EBONYI", "Ebonyi"] },
                    { value: "edo", label: "012", alternates: ["Edo", "EDO"] },
                    { value: "ekiti", label: "013", alternates: ["Ekiti", "EKITI"] },
                    { value: "enugu", label: "014", alternates: ["ENUGU", "Enugu"] },
                    { value: "Imo", label: "017", alternates: ["imo"] }
                  ],
                  matchStrategy: "exact",
              },
                {
                  label: "Secondary State",
                  key: "Secondary State",
                  type: "select",
                  alternates: ["Secondary State", "Secondary_State", "secondary_state", "secondarystate"],
                  options: [
                    { value: "Abia", label: "001" },
                    { value: "Adamawa", label: "002" },
                    { value: "Akwa-Ibom", label: "003" },
                    { value: "Anambra", label: "004" },
                    { value: "Bauchi", label: "005", alternates: ["BAUCHI", "bauchi"] },
                    { value: "Bayelsa", label: "006", alternates: ["BAYELSA", "bayelsa"] },
                    { value: "Benue", label: "007", alternates: ["BENUE", "benue"] },
                    { value: "Borno", label: "008", alternates: ["BORNO", "borno", "bornu", "BORNU"] },
                    { value: "cross_river", label: "009", alternates: ["CROSS-RIVER", "Cross River", "Cross-River"] },
                    { value: "delta", label: "010", alternates: ["Delta", "DELTA"] },
                    { value: "ebonyi", label: "011", alternates: ["EBONYI", "Ebonyi"] },
                    { value: "edo", label: "012", alternates: ["Edo", "EDO"] },
                    { value: "ekiti", label: "013", alternates: ["Ekiti", "EKITI"] },
                    { value: "enugu", label: "014", alternates: ["ENUGU", "Enugu"] },
                    { value: "Imo", label: "017", alternates: ["imo"] }
                  ],
                  matchStrategy: "exact",
              },
                {
                  label: "Employer State",
                  key: "Employer State",
                  type: "select",
                  alternates: ["Employer State", "Employer_State", "employer_state", "employerstate"],
                  options: [
                      { value: "Abia", label: "001" },
                      { value: "Adamawa", label: "002" },
                      { value: "Akwa-Ibom", label: "003" },
                      { value: "Anambra", label: "004" },
                      { value: "Bauchi", label: "005", alternates: ["BAUCHI", "bauchi"] },
                      { value: "Bayelsa", label: "006", alternates: ["BAYELSA", "bayelsa"] },
                      { value: "Benue", label: "007", alternates: ["BENUE", "benue"] },
                      { value: "Borno", label: "008", alternates: ["BORNO", "borno", "bornu", "BORNU"] },
                      { value: "cross_river", label: "009", alternates: ["CROSS-RIVER", "Cross River", "Cross-River"] },
                      { value: "delta", label: "010", alternates: ["Delta", "DELTA"] },
                      { value: "ebonyi", label: "011", alternates: ["EBONYI", "Ebonyi"] },
                      { value: "edo", label: "012", alternates: ["Edo", "EDO"] },
                      { value: "ekiti", label: "013", alternates: ["Ekiti", "EKITI"] },
                      { value: "enugu", label: "014", alternates: ["ENUGU", "Enugu"] },
                      { value: "Imo", label: "017", alternates: ["imo"] }
                  ],
                  matchStrategy: "exact",
              },
                {
                  label: "nationality",
                  key: "Nationality",
                  type: "select",
                  alternates: ["Nationality"],
                  options: [           
                     { value: "Nigeria", label: "NG", alternates: ["NGN", "Nigerian"] }
                  ],
                  matchStrategy: "exact",
              },
                {
                  label: "Primary Country",
                  key: "Primary Country",
                  type: "select",
                  alternates: ["Primary_Country", "primary_country"],
                  options: [           
                     { value: "Nigeria", label: "NG", alternates: ["NGN", "Nigerian"] }
                  ],
                  matchStrategy: "exact",
              },
                {
                  label: "Secondary Country",
                  key: "Secondary Country",
                  type: "select",
                  alternates: ["Secondary_Country", "secondary_country"],
                  options: [           
                     { value: "Nigeria", label: "NG", alternates: ["NGN", "Nigerian"] }
                  ],
                  matchStrategy: "exact",
              },
                {
                  label: "Employer Country",
                  key: "Employer Country",
                  type: "select",
                  alternates: ["Employer_Country", "employer_country"],
                  options: [           
                     { value: "Nigeria", label: "NG", alternates: ["NGN", "Nigerian"] }
                  ],
                  matchStrategy: "exact",
              },
              {
                label: "Gender",
                key: "Gender",
                type: "select",
                alternates: ["sex", "gender", "Sex"],
                options: [
                    { value: "male", label: "M" },
                    { value: "female", label: "F" },
                ]
            },
              {
                label: "marital_status",
                key: "Marital Status",
                type: "select",
                options: [
                    { value: "single", label: "S", alternates: ["Single", "S"] },
                    { value: "married", label: "M", alternates: ["Married", "M"] },
                    { value: "divorced", label: "D", alternates: ["Divorced", "D"] },
                    { value: "widow", label: "WD", alternates: ["Widow", "Widowed", "WD"] },
                    { value: "widower", label: "WR", alternates:["Widower", "WR"] },
                ],
                matchStrategy: "exact"
            }
            ],
            managed: true,
            devMode: true
        }}
        licenseKey={license}
        customer={{
            companyId: "ABC-123",
            companyName: "ABC Corp.",
            email: "john@abc123.com",
            name: "John Smith",
            userId: "12345"
        }}
        onRecordChange={(record) =>
          {return { state: { value: record.State + " from change" }}
        }}
        onData={async(results) => {
          // console.log(results.validData.concat())
          setResults(results)       
         
        
        }}
        
        // onRecordInit={(record) =>
        //   {return { state: { value: record.state + " from init" }}
        // }}
        // fieldHooks={{
        //   state: (values) =>
        //      values.map(([item, index]) => [
        //       { value: item + ".au" },
        //       index
        //     ])
        //   }
        // }
        onCancel={() => {
          console.log("cancel");
        }}
       
        render={(importer, launch) => {
          return (
          <>
          <button onClick={launch} className = 'btn'>Upload file</button>
          {/* {results ? (
          <ul>
            {results.data.map((record) => (
              <li>
                {record.Sex}
              </li>
            ))}
          </ul>
        ) : (
          <div>no data yet</div>
        )} */}
          </>
          );
          
        }}
      />
    </div>
  );
};

export default Consumer