import React, {useState} from "react";
import { FlatfileButton, FlatfileResults } from "@flatfile/react";
import {Link} from 'react-router-dom'

export const Credit = () => {
    const license = '6fe1e94e-ae46-448d-938f-e30265c4575b'
    const [results, setResults] = useState(FlatfileResults);
  return (
    <div>
      <Link to= '/' className="back-link">GO BACK</Link>
      <h1 className="lead-txt">Import credit file</h1>
      <FlatfileButton
        settings={{
            type: "test import",
            fields: [
                { label: "account_number", key: "Account Number" },
                { label: "account_status", key: "Account Status",
                type: "select",
                options: [
                    {value: "open", label: "001"},
                    {value: "close", label: "002"},
                ]
            },
                {label: "account_status_date", key: "Account Status Date"},
                {label: "date_of_loan", key: "Date Of Loan"},
                { label: "deferred_payment_date", key: "Deferred Payment Date" },
                { label: "credit_limit", key: "Credit Limit" },
                {label: "availed_limit", key: "Availed Limit"},
                { label: "outstanding_balance", key: "Outstanding Balance" },
                { label: "current_balance_debit_ind", key: "Current Balance Debit Ind" },
                { label: "installment_amount", key: "Installment Amount" },
                { label: "currency", key: "Curency", 
                type: "select",
                options: [
                    {value: "Naira", label: "NGN", alternates: ["NG", "NGN", "NGR"]}
                ]
            },
                { label: "days_in_arrears", key: "Days In Arrears"},
                { label: "overdue_amount", key: "Overdue Amount" },
                { label: "facility_type", key: "Facility Type", alternates: ["account_type", "loan_type"],
                type: "select",
                options: [
                    {value: "staff_loan", label: "045"}
                ]
            },
                { label: "facility_tenor", key: "Facility Tenor", alternates: ["loan_tenor"] },
                { label: "facility_ownership_type", key: "Facility Ownership Type" },
                { label: "repayment_frequency", key: "Repayment Frequency", 
                type: "select",
                options: [
                    {value: "daily", label: "1"},
                    {value: "weekly", label: "1"},
                    {value: "forthnightly", label: "2"},
                    {value: "monthly", label: "3"},
                    {value: "quarterly", label: "4"},
                    // {value: "", label: "5"},
                ]
            },
                {label: "last_payment_date", key: "Last Payment Date"},
                {label: "last_payment_amount", key: "Last Payment Amount"},
                {label: "maturity_date", key: "Maturity Date"},
                {label: "income", key: "Income"},
                {label: "income_frequency", key: "Income Frequency"},
                {label: "owner_tenant", key: "Owner Tenant"},
                {label: "number_of_participants_in_joint_loan", key: "NOOFPARTICIPANTSINJOINTLOAN"},
                {label: "dependants", key: "Dependants"},
                {label: "loan_classification", key: "Loan Classification",
                type: "select",
                options: [
                    {value: "performing", label: "001"},
                    {value: "watchlist", label: "002", alternates: ["watch_&_pass"]},
                    {value: "su", label: "003"},
                    {value: "doubtful", label: "004"},
                    {value: "lost", label: "005", alternates: ["loss"]},
                ] 
             },
                {label: "legal_challenge_status", key: "Legal Challenge Status"},
                {label: "litigation_date", key: "Litigation Date"},
                {label: "consent_status", key: "Consent Status"},
                {label: "loan_security_status", key: "Loan Security Status"},
                {label: "collateral_type", key: "Collateral Type"},
                {label: "collateral_details", key: "Collateral Details"},
                {label: "account_number", key: "Account Number"},
                {label: "CustomerID", key: "Customer ID", alternates: ["Customer ID"]},              
            ],
            managed: true,
            devMode: true
        }}
        licenseKey={license}
        customer={{
            companyId: "XDSNG",
            companyName: "First Central",
            email: "c.nwosu@firstcentralcreditbureau.com",
            name: "Chidera nwosu",
            userId: "12345"
        }}
        onRecordChange={(record) =>
          {return { state: { value: record.State + " from change" }}
        }}
        onData={async(results) => {
          // console.log(results.validData.concat())
          setResults(results)       
         
        
        }}
        
        
        onCancel={() => {
          console.log("cancel");
        }}
       
        render={(importer, launch) => {
          return (
          <>
          <button onClick={launch} className = 'btn'>Upload file</button>
         
          </>
          );
          
        }}
      />
    </div>
  );
};

export default Credit