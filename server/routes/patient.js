const express=require("express")
const router=express.Router();
const {handleFetchingPatientDetails,handleFetchingRecords,handleFetchingRecordById,handleFetchingLabReports,handleFetchingLabReportById}=require('../controllers/patient.js')

//<-------------------Patient Routes----------------------->
router.get("/:id",handleFetchingPatientDetails)

//<-----------------Medical Records Routes-------------->
router.route("/:id/records").get(handleFetchingRecords)
router.route("/:id/records/:visitId",handleFetchingRecordById)


//<--------------------Lab Reports Routes--------------------->
router.route("/:id/reports").get(handleFetchingLabReports)
router.route("/:id/reports/:reportId").get(handleFetchingLabReportById)

//<------------Patient Uploads Routes--------------->
// router.route("/:id/uploads").

module.exports=router