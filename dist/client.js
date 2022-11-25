"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postActionsTemplatesById = exports.deleteActionsTemplatesById = exports.putActionsTemplatesById = exports.getActionsTemplatesById = exports.putActionsTemplates = exports.deleteActionsTemplates = exports.postActionsTemplates = exports.getActionsTemplates = exports.postActionsById = exports.putActionsById = exports.deleteActionsById = exports.getActionsById = exports.postActionsDefault = exports.deleteActionsDefault = exports.putActionsDefault = exports.getActionsDefault = exports.putActions = exports.deleteActions = exports.postActions = exports.getActions = exports.postAccountsById = exports.putAccountsById = exports.deleteAccountsById = exports.getAccountsById = exports.postAccountsDefault = exports.deleteAccountsDefault = exports.putAccountsDefault = exports.getAccountsDefault = exports.putAccounts = exports.deleteAccounts = exports.postAccounts = exports.getAccounts = exports.postAbsencesReportsById = exports.putAbsencesReportsById = exports.deleteAbsencesReportsById = exports.getAbsencesReportsById = exports.postAbsencesReportsDefault = exports.deleteAbsencesReportsDefault = exports.putAbsencesReportsDefault = exports.getAbsencesReportsDefault = exports.putAbsencesReports = exports.deleteAbsencesReports = exports.postAbsencesReports = exports.getAbsencesReports = exports.putAbsences = exports.deleteAbsences = exports.postAbsences = exports.getAbsences = exports.servers = exports.defaults = void 0;
exports.deleteApplicationRestoreDictionary = exports.putApplicationRestoreDictionary = exports.getApplicationBackupDictionary = exports.putApplicationBackupDictionary = exports.deleteApplicationBackupDictionary = exports.postApplicationBackupDictionary = exports.putApplicationDownloadDictionary = exports.postApplicationDownloadDictionary = exports.deleteApplicationDownloadDictionary = exports.getApplicationDownloadDictionary = exports.postApplicationDictionary = exports.deleteApplicationDictionary = exports.putApplicationDictionary = exports.getApplicationDictionary = exports.putApplicationCurrentUser = exports.postApplicationCurrentUser = exports.deleteApplicationCurrentUser = exports.getApplicationCurrentUser = exports.putApplicationAssignments = exports.postApplicationAssignments = exports.deleteApplicationAssignments = exports.getApplicationAssignments = exports.postAgenciesById = exports.putAgenciesById = exports.deleteAgenciesById = exports.getAgenciesById = exports.postAgenciesDefault = exports.deleteAgenciesDefault = exports.putAgenciesDefault = exports.getAgenciesDefault = exports.putAgencies = exports.deleteAgencies = exports.postAgencies = exports.getAgencies = exports.postAdvantagesById = exports.putAdvantagesById = exports.deleteAdvantagesById = exports.getAdvantagesById = exports.postAdvantagesDefault = exports.deleteAdvantagesDefault = exports.putAdvantagesDefault = exports.getAdvantagesDefault = exports.putAdvantages = exports.deleteAdvantages = exports.postAdvantages = exports.getAdvantages = exports.postAdministrator = exports.deleteAdministrator = exports.putAdministrator = exports.getAdministrator = void 0;
exports.getAppsAbsencesAccounts = exports.putAppsAbsencesAccounts = exports.postAppsAbsencesAccounts = exports.deleteAppsAbsencesAccounts = exports.getAppsByAppCodeUninstall = exports.putAppsByAppCodeUninstall = exports.postAppsByAppCodeUninstall = exports.deleteAppsByAppCodeUninstall = exports.getAppsByAppCodeInstall = exports.putAppsByAppCodeInstall = exports.deleteAppsByAppCodeInstall = exports.postAppsByAppCodeInstall = exports.postAppsById = exports.deleteAppsById = exports.putAppsById = exports.getAppsById = exports.putApps = exports.deleteApps = exports.postApps = exports.getApps = exports.putApplicationWeekendAndBankHolidays = exports.postApplicationWeekendAndBankHolidays = exports.deleteApplicationWeekendAndBankHolidays = exports.getApplicationWeekendAndBankHolidays = exports.putApplicationStatus = exports.postApplicationStatus = exports.deleteApplicationStatus = exports.getApplicationStatus = exports.postApplicationSettings = exports.deleteApplicationSettings = exports.putApplicationSettings = exports.getApplicationSettings = exports.getApplicationReadDatabase = exports.putApplicationReadDatabase = exports.deleteApplicationReadDatabase = exports.postApplicationReadDatabase = exports.putApplicationPerimeters = exports.postApplicationPerimeters = exports.deleteApplicationPerimeters = exports.getApplicationPerimeters = exports.putApplicationFlags = exports.postApplicationFlags = exports.deleteApplicationFlags = exports.getApplicationFlags = exports.putApplicationDumpDatabase = exports.deleteApplicationDumpDatabase = exports.getApplicationDumpDatabase = exports.postApplicationDumpDatabase = exports.getApplicationRestoreDictionary = exports.postApplicationRestoreDictionary = void 0;
exports.putAppsEmailing = exports.getAppsEmailing = exports.getAppsDocTemplates = exports.putAppsDocTemplates = exports.postAppsDocTemplates = exports.deleteAppsDocTemplates = exports.getAppsDataClosing = exports.putAppsDataClosing = exports.postAppsDataClosing = exports.deleteAppsDataClosing = exports.postAppsCreateActivityDocuments = exports.deleteAppsCreateActivityDocuments = exports.putAppsCreateActivityDocuments = exports.getAppsCreateActivityDocuments = exports.getAppsCorporateDocuments = exports.putAppsCorporateDocuments = exports.postAppsCorporateDocuments = exports.deleteAppsCorporateDocuments = exports.getAppsCorporama = exports.putAppsCorporama = exports.postAppsCorporama = exports.deleteAppsCorporama = exports.getAppsContracts = exports.putAppsContracts = exports.postAppsContracts = exports.deleteAppsContracts = exports.getAppsBackupDatabase = exports.putAppsBackupDatabase = exports.postAppsBackupDatabase = exports.deleteAppsBackupDatabase = exports.getAppsAnsweringValidators = exports.putAppsAnsweringValidators = exports.postAppsAnsweringValidators = exports.deleteAppsAnsweringValidators = exports.getAppsAdvantages = exports.putAppsAdvantages = exports.postAppsAdvantages = exports.deleteAppsAdvantages = exports.getAppsAdvancedProjects = exports.putAppsAdvancedProjects = exports.postAppsAdvancedProjects = exports.deleteAppsAdvancedProjects = exports.getAppsAdvancedCandidates = exports.putAppsAdvancedCandidates = exports.postAppsAdvancedCandidates = exports.deleteAppsAdvancedCandidates = exports.getAppsAccountingPayroll = exports.putAppsAccountingPayroll = exports.postAppsAccountingPayroll = exports.deleteAppsAccountingPayroll = void 0;
exports.getAppsOrganizationCharts = exports.putAppsOrganizationCharts = exports.postAppsOrganizationCharts = exports.deleteAppsOrganizationCharts = exports.getAppsNotifications = exports.putAppsNotifications = exports.postAppsNotifications = exports.deleteAppsNotifications = exports.getAppsMicrosoft = exports.putAppsMicrosoft = exports.postAppsMicrosoft = exports.deleteAppsMicrosoft = exports.getAppsMarkers = exports.putAppsMarkers = exports.postAppsMarkers = exports.deleteAppsMarkers = exports.getAppsIntranetAccounts = exports.putAppsIntranetAccounts = exports.postAppsIntranetAccounts = exports.deleteAppsIntranetAccounts = exports.getAppsHourAccounts = exports.putAppsHourAccounts = exports.postAppsHourAccounts = exports.deleteAppsHourAccounts = exports.getAppsGviewer = exports.putAppsGviewer = exports.postAppsGviewer = exports.deleteAppsGviewer = exports.getAppsGmail = exports.putAppsGmail = exports.postAppsGmail = exports.deleteAppsGmail = exports.getAppsGcalendar = exports.putAppsGcalendar = exports.postAppsGcalendar = exports.deleteAppsGcalendar = exports.getAppsExtractPayroll = exports.putAppsExtractPayroll = exports.postAppsExtractPayroll = exports.deleteAppsExtractPayroll = exports.postAppsExtractBi = exports.deleteAppsExtractBi = exports.putAppsExtractBi = exports.getAppsExtractBi = exports.getAppsExceptionalActivity = exports.putAppsExceptionalActivity = exports.postAppsExceptionalActivity = exports.deleteAppsExceptionalActivity = exports.postAppsEmailing = exports.deleteAppsEmailing = void 0;
exports.postBillingSchedulesBalance = exports.getBillingSchedulesBalance = exports.putBillingProjectsBalance = exports.deleteBillingProjectsBalance = exports.postBillingProjectsBalance = exports.getBillingProjectsBalance = exports.putBillingMonthlyBalance = exports.deleteBillingMonthlyBalance = exports.postBillingMonthlyBalance = exports.getBillingMonthlyBalance = exports.putBillingDeliveriesPurchasesBalance = exports.deleteBillingDeliveriesPurchasesBalance = exports.postBillingDeliveriesPurchasesBalance = exports.getBillingDeliveriesPurchasesBalance = exports.putAttachedFlags = exports.getAttachedFlags = exports.deleteAttachedFlags = exports.postAttachedFlags = exports.getAppsSurvey = exports.putAppsSurvey = exports.postAppsSurvey = exports.deleteAppsSurvey = exports.getAppsSpecialReporting = exports.putAppsSpecialReporting = exports.postAppsSpecialReporting = exports.deleteAppsSpecialReporting = exports.getAppsSepa = exports.putAppsSepa = exports.postAppsSepa = exports.deleteAppsSepa = exports.postAppsSaasEditor = exports.deleteAppsSaasEditor = exports.putAppsSaasEditor = exports.getAppsSaasEditor = exports.getAppsResourcePlanner = exports.putAppsResourcePlanner = exports.postAppsResourcePlanner = exports.deleteAppsResourcePlanner = exports.getAppsQuotations = exports.putAppsQuotations = exports.postAppsQuotations = exports.deleteAppsQuotations = exports.getAppsPostProduction = exports.putAppsPostProduction = exports.postAppsPostProduction = exports.deleteAppsPostProduction = exports.getAppsPlanProduction = exports.putAppsPlanProduction = exports.postAppsPlanProduction = exports.deleteAppsPlanProduction = void 0;
exports.postCompaniesDefault = exports.deleteCompaniesDefault = exports.putCompaniesDefault = exports.getCompaniesDefault = exports.putCompanies = exports.deleteCompanies = exports.postCompanies = exports.getCompanies = exports.postChartsById = exports.deleteChartsById = exports.putChartsById = exports.getChartsById = exports.postCandidatesById = exports.deleteCandidatesById = exports.putCandidatesById = exports.getCandidatesById = exports.postCandidatesDefault = exports.deleteCandidatesDefault = exports.putCandidatesDefault = exports.getCandidatesDefault = exports.putCandidates = exports.deleteCandidates = exports.postCandidates = exports.getCandidates = exports.postCalendarsById = exports.deleteCalendarsById = exports.putCalendarsById = exports.getCalendarsById = exports.postCalendarsDefault = exports.deleteCalendarsDefault = exports.putCalendarsDefault = exports.getCalendarsDefault = exports.putCalendars = exports.deleteCalendars = exports.postCalendars = exports.getCalendars = exports.postBusinessUnitsById = exports.putBusinessUnitsById = exports.deleteBusinessUnitsById = exports.getBusinessUnitsById = exports.postBusinessUnitsDefault = exports.deleteBusinessUnitsDefault = exports.putBusinessUnitsDefault = exports.getBusinessUnitsDefault = exports.putBusinessUnits = exports.deleteBusinessUnits = exports.postBusinessUnits = exports.getBusinessUnits = exports.putBillingSchedulesBalance = exports.deleteBillingSchedulesBalance = void 0;
exports.getDeliveries = exports.postDeliveries = exports.postDashboard = exports.deleteDashboard = exports.putDashboard = exports.getDashboard = exports.postBoondmanagerContractsById = exports.deleteBoondmanagerContractsById = exports.putBoondmanagerContractsById = exports.getBoondmanagerContractsById = exports.postContractsById = exports.putContractsById = exports.deleteContractsById = exports.getContractsById = exports.postContractsDefault = exports.deleteContractsDefault = exports.putContractsDefault = exports.getContractsDefault = exports.putContracts = exports.deleteContracts = exports.postContracts = exports.getContracts = exports.postContactsById = exports.putContactsById = exports.deleteContactsById = exports.getContactsById = exports.postContactsDefault = exports.deleteContactsDefault = exports.putContactsDefault = exports.getContactsDefault = exports.putContacts = exports.deleteContacts = exports.postContacts = exports.getContacts = exports.postThreadsById = exports.putThreadsById = exports.deleteThreadsById = exports.getThreadsById = exports.postThreadsDefault = exports.deleteThreadsDefault = exports.putThreadsDefault = exports.getThreadsDefault = exports.putThreads = exports.deleteThreads = exports.postThreads = exports.getThreads = exports.postCompaniesById = exports.putCompaniesById = exports.deleteCompaniesById = exports.getCompaniesById = void 0;
exports.postExpensesReportsDefault = exports.deleteExpensesReportsDefault = exports.putExpensesReportsDefault = exports.getExpensesReportsDefault = exports.putExpensesReports = exports.deleteExpensesReports = exports.postExpensesReports = exports.getExpensesReports = exports.putExpenses = exports.deleteExpenses = exports.postExpenses = exports.getExpenses = exports.postSignatures = exports.putSignatures = exports.getSignatures = exports.deleteSignatures = exports.postDownloadCenterByPerimeterManagerAndFolder = exports.putDownloadCenterByPerimeterManagerAndFolder = exports.deleteDownloadCenterByPerimeterManagerAndFolder = exports.getDownloadCenterByPerimeterManagerAndFolder = exports.postDownloadCenter = exports.deleteDownloadCenter = exports.putDownloadCenter = exports.getDownloadCenter = exports.postDocumentsById = exports.deleteDocumentsById = exports.putDocumentsById = exports.getDocumentsById = exports.putDocumentsViewer = exports.deleteDocumentsViewer = exports.postDocumentsViewer = exports.getDocumentsViewer = exports.putDocuments = exports.deleteDocuments = exports.getDocuments = exports.postDocuments = exports.postDevicesById = exports.putDevicesById = exports.getDevicesById = exports.deleteDevicesById = exports.putDeliveriesGroupments = exports.deleteDeliveriesGroupments = exports.postDeliveriesGroupments = exports.getDeliveriesGroupments = exports.postDeliveriesById = exports.putDeliveriesById = exports.deleteDeliveriesById = exports.getDeliveriesById = exports.putDeliveries = exports.deleteDeliveries = void 0;
exports.deleteInvoicesById = exports.getInvoicesById = exports.postInvoicesDefault = exports.deleteInvoicesDefault = exports.putInvoicesDefault = exports.getInvoicesDefault = exports.putInvoices = exports.deleteInvoices = exports.postInvoices = exports.getInvoices = exports.postInactivitiesById = exports.putInactivitiesById = exports.deleteInactivitiesById = exports.getInactivitiesById = exports.postInactivitiesDefault = exports.deleteInactivitiesDefault = exports.putInactivitiesDefault = exports.getInactivitiesDefault = exports.putInactivities = exports.deleteInactivities = exports.getInactivities = exports.postInactivities = exports.postGroupmentsById = exports.putGroupmentsById = exports.deleteGroupmentsById = exports.getGroupmentsById = exports.postGroupmentsDefault = exports.deleteGroupmentsDefault = exports.putGroupmentsDefault = exports.getGroupmentsDefault = exports.putGroupments = exports.deleteGroupments = exports.getGroupments = exports.postGroupments = exports.getGoogleById = exports.putGoogleById = exports.postGoogleById = exports.deleteGoogleById = exports.postFlagsById = exports.putFlagsById = exports.deleteFlagsById = exports.getFlagsById = exports.putFlags = exports.deleteFlags = exports.postFlags = exports.getFlags = exports.postExpensesReportsById = exports.putExpensesReportsById = exports.deleteExpensesReportsById = exports.getExpensesReportsById = void 0;
exports.postOpportunitiesById = exports.putOpportunitiesById = exports.deleteOpportunitiesById = exports.getOpportunitiesById = exports.postOpportunitiesDefault = exports.deleteOpportunitiesDefault = exports.putOpportunitiesDefault = exports.getOpportunitiesDefault = exports.putOpportunities = exports.deleteOpportunities = exports.postOpportunities = exports.getOpportunities = exports.getMicrosoftById = exports.putMicrosoftById = exports.postMicrosoftById = exports.deleteMicrosoftById = exports.getMarketplaceRefreshToken = exports.putMarketplaceRefreshToken = exports.deleteMarketplaceRefreshToken = exports.postMarketplaceRefreshToken = exports.postMarketplaceByAppCodeConfigure = exports.deleteMarketplaceByAppCodeConfigure = exports.putMarketplaceByAppCodeConfigure = exports.getMarketplaceByAppCodeConfigure = exports.postMarketplaceByIdConfigure = exports.deleteMarketplaceByIdConfigure = exports.putMarketplaceByIdConfigure = exports.getMarketplaceByIdConfigure = exports.postMarketplaceById = exports.putMarketplaceById = exports.deleteMarketplaceById = exports.getMarketplaceById = exports.postMarketplaceDefault = exports.deleteMarketplaceDefault = exports.putMarketplaceDefault = exports.getMarketplaceDefault = exports.putMarketplace = exports.deleteMarketplace = exports.postMarketplace = exports.getMarketplace = exports.postLogsById = exports.deleteLogsById = exports.putLogsById = exports.getLogsById = exports.putLogs = exports.deleteLogs = exports.postLogs = exports.getLogs = exports.postInvoicesById = exports.putInvoicesById = void 0;
exports.deleteProductsById = exports.getProductsById = exports.postProductsDefault = exports.deleteProductsDefault = exports.putProductsDefault = exports.getProductsDefault = exports.putProducts = exports.deleteProducts = exports.postProducts = exports.getProducts = exports.postPositioningsById = exports.putPositioningsById = exports.deletePositioningsById = exports.getPositioningsById = exports.putPositionings = exports.deletePositionings = exports.postPositionings = exports.getPositionings = exports.postPolesById = exports.putPolesById = exports.deletePolesById = exports.getPolesById = exports.putPoles = exports.deletePoles = exports.postPoles = exports.getPoles = exports.postPaymentsById = exports.putPaymentsById = exports.deletePaymentsById = exports.getPaymentsById = exports.postPaymentsDefault = exports.deletePaymentsDefault = exports.putPaymentsDefault = exports.getPaymentsDefault = exports.putPayments = exports.deletePayments = exports.postPayments = exports.getPayments = exports.postOrdersById = exports.putOrdersById = exports.deleteOrdersById = exports.getOrdersById = exports.postOrdersDefault = exports.deleteOrdersDefault = exports.putOrdersDefault = exports.getOrdersDefault = exports.putOrders = exports.deleteOrders = exports.postOrders = exports.getOrders = void 0;
exports.postResourcesDefault = exports.deleteResourcesDefault = exports.putResourcesDefault = exports.getResourcesDefault = exports.putResources = exports.deleteResources = exports.postResources = exports.getResources = exports.putReportingResources = exports.deleteReportingResources = exports.postReportingResources = exports.getReportingResources = exports.putReportingProjects = exports.deleteReportingProjects = exports.postReportingProjects = exports.getReportingProjects = exports.putReportingCompanies = exports.deleteReportingCompanies = exports.postReportingCompanies = exports.getReportingCompanies = exports.putReportingSynthesis = exports.deleteReportingSynthesis = exports.postReportingSynthesis = exports.getReportingSynthesis = exports.putReportingProductionPlans = exports.deleteReportingProductionPlans = exports.postReportingProductionPlans = exports.getReportingProductionPlans = exports.postPurchasesById = exports.putPurchasesById = exports.deletePurchasesById = exports.getPurchasesById = exports.postPurchasesDefault = exports.deletePurchasesDefault = exports.putPurchasesDefault = exports.getPurchasesDefault = exports.putPurchases = exports.deletePurchases = exports.postPurchases = exports.getPurchases = exports.postProjectsById = exports.putProjectsById = exports.deleteProjectsById = exports.getProjectsById = exports.putProjects = exports.deleteProjects = exports.postProjects = exports.getProjects = exports.postProductsById = exports.putProductsById = void 0;
exports.getTasksById = exports.putTasksById = exports.postTargetsById = exports.putTargetsById = exports.deleteTargetsById = exports.getTargetsById = exports.putTargets = exports.deleteTargets = exports.getTargets = exports.postTargets = exports.putSubscriptionInvoices = exports.deleteSubscriptionInvoices = exports.postSubscriptionInvoices = exports.getSubscriptionInvoices = exports.postSubscription = exports.deleteSubscription = exports.putSubscription = exports.getSubscription = exports.postShareDefault = exports.deleteShareDefault = exports.putShareDefault = exports.getShareDefault = exports.putShare = exports.deleteShare = exports.getShare = exports.postShare = exports.getSandbox = exports.putSandbox = exports.deleteSandbox = exports.postSandbox = exports.postSavedsearchesById = exports.putSavedsearchesById = exports.deleteSavedsearchesById = exports.getSavedsearchesById = exports.putSavedsearches = exports.deleteSavedsearches = exports.postSavedsearches = exports.getSavedsearches = exports.postRolesById = exports.putRolesById = exports.deleteRolesById = exports.getRolesById = exports.putRoles = exports.deleteRoles = exports.postRoles = exports.getRoles = exports.postResourcesById = exports.putResourcesById = exports.deleteResourcesById = exports.getResourcesById = void 0;
exports.postVendor = exports.deleteVendor = exports.putVendor = exports.getVendor = exports.postValidationsById = exports.putValidationsById = exports.deleteValidationsById = exports.getValidationsById = exports.putValidations = exports.deleteValidations = exports.postValidations = exports.getValidations = exports.getTrustelemById = exports.putTrustelemById = exports.postTrustelemById = exports.deleteTrustelemById = exports.postTodolistsById = exports.deleteTodolistsById = exports.putTodolistsById = exports.getTodolistsById = exports.putTodolists = exports.deleteTodolists = exports.postTodolists = exports.getTodolists = exports.putThumbnailsById = exports.postThumbnailsById = exports.deleteThumbnailsById = exports.getThumbnailsById = exports.putThumbnails = exports.deleteThumbnails = exports.getThumbnails = exports.postThumbnails = exports.postTimesReportsById = exports.putTimesReportsById = exports.deleteTimesReportsById = exports.getTimesReportsById = exports.postTimesReportsDefault = exports.deleteTimesReportsDefault = exports.putTimesReportsDefault = exports.getTimesReportsDefault = exports.putTimesReports = exports.deleteTimesReports = exports.postTimesReports = exports.getTimesReports = exports.putTimes = exports.deleteTimes = exports.postTimes = exports.getTimes = exports.postTasksById = exports.deleteTasksById = void 0;
exports.putWorkplacesTimes = exports.deleteWorkplacesTimes = exports.postWorkplacesTimes = exports.getWorkplacesTimes = exports.postWebhooksById = exports.putWebhooksById = exports.deleteWebhooksById = exports.getWebhooksById = exports.putWebhooks = exports.deleteWebhooks = exports.postWebhooks = exports.getWebhooks = void 0;
/**
 * BoondManager API
 * 1.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
const Oazapfts = __importStar(require("oazapfts/lib/runtime"));
const QS = __importStar(require("oazapfts/lib/runtime/query"));
exports.defaults = {
    baseUrl: "https://ui.boondmanager.com/api/1.0",
};
const oazapfts = Oazapfts.runtime(exports.defaults);
exports.servers = {
    server1: ({ apiServer = "ui.boondmanager.com", apiVersion = "1.0" }) => `https://${apiServer}/api/${apiVersion}`
};
/**
 * Search absences
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/absences.csv?keywords=TPS1*
 *
 */
function getAbsences(body, { keywords, resourceTypes, excludeResourceTypes, period, startDate, endDate, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/absences${QS.query(QS.explode({
        keywords,
        resourceTypes,
        excludeResourceTypes,
        period,
        startDate,
        endDate,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getAbsences = getAbsences;
function postAbsences(body, opts) {
    return oazapfts.fetchJson("/absences", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAbsences = postAbsences;
function deleteAbsences(opts) {
    return oazapfts.fetchJson("/absences", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAbsences = deleteAbsences;
function putAbsences(opts) {
    return oazapfts.fetchJson("/absences", {
        ...opts,
        method: "PUT"
    });
}
exports.putAbsences = putAbsences;
/**
 * Search request absences
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/absences-reports.csv?keywords=ABS1*
 *
 */
function getAbsencesReports(startMonth, endMonth, body, { keywords, resourceTypes, validationStates, encoding, extractType, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/absences-reports${QS.query(QS.explode({
        keywords,
        resourceTypes,
        validationStates,
        startMonth,
        endMonth,
        encoding,
        extractType,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getAbsencesReports = getAbsencesReports;
/**
 * Create a request of absences
 */
function postAbsencesReports(body, opts) {
    return oazapfts.fetchJson("/absences-reports", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAbsencesReports = postAbsencesReports;
function deleteAbsencesReports(opts) {
    return oazapfts.fetchJson("/absences-reports", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAbsencesReports = deleteAbsencesReports;
function putAbsencesReports(opts) {
    return oazapfts.fetchJson("/absences-reports", {
        ...opts,
        method: "PUT"
    });
}
exports.putAbsencesReports = putAbsencesReports;
/**
 * Get empty request of absences default basic data
 */
function getAbsencesReportsDefault(resource, body, { agency } = {}, opts) {
    return oazapfts.fetchJson(`/absences-reports/default${QS.query(QS.explode({
        resource,
        agency
    }))}`, {
        ...opts,
        body
    });
}
exports.getAbsencesReportsDefault = getAbsencesReportsDefault;
function putAbsencesReportsDefault(body, opts) {
    return oazapfts.fetchJson("/absences-reports/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAbsencesReportsDefault = putAbsencesReportsDefault;
function deleteAbsencesReportsDefault(opts) {
    return oazapfts.fetchJson("/absences-reports/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAbsencesReportsDefault = deleteAbsencesReportsDefault;
function postAbsencesReportsDefault(opts) {
    return oazapfts.fetchJson("/absences-reports/default", {
        ...opts,
        method: "POST"
    });
}
exports.postAbsencesReportsDefault = postAbsencesReportsDefault;
/**
 * Get request of absences basic data
 */
function getAbsencesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/absences-reports/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getAbsencesReportsById = getAbsencesReportsById;
/**
 * Delete the request of absences
 */
function deleteAbsencesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/absences-reports/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAbsencesReportsById = deleteAbsencesReportsById;
/**
 * Update basic data related to a request of absences
 */
function putAbsencesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/absences-reports/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAbsencesReportsById = putAbsencesReportsById;
function postAbsencesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/absences-reports/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postAbsencesReportsById = postAbsencesReportsById;
/**
 * Search accounts
 */
function getAccounts(body, { keywords, userSubscriptions, resourceTypes, roles, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/accounts${QS.query(QS.explode({
        keywords,
        userSubscriptions,
        resourceTypes,
        roles,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getAccounts = getAccounts;
/**
 * Create an account
 */
function postAccounts(body, opts) {
    return oazapfts.fetchJson("/accounts", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAccounts = postAccounts;
function deleteAccounts(opts) {
    return oazapfts.fetchJson("/accounts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAccounts = deleteAccounts;
function putAccounts(opts) {
    return oazapfts.fetchJson("/accounts", {
        ...opts,
        method: "PUT"
    });
}
exports.putAccounts = putAccounts;
/**
 * Get empty account's default basic data
 */
function getAccountsDefault(body, { resource } = {}, opts) {
    return oazapfts.fetchJson(`/accounts/default${QS.query(QS.explode({
        resource
    }))}`, {
        ...opts,
        body
    });
}
exports.getAccountsDefault = getAccountsDefault;
function putAccountsDefault(body, opts) {
    return oazapfts.fetchJson("/accounts/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAccountsDefault = putAccountsDefault;
function deleteAccountsDefault(opts) {
    return oazapfts.fetchJson("/accounts/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAccountsDefault = deleteAccountsDefault;
function postAccountsDefault(opts) {
    return oazapfts.fetchJson("/accounts/default", {
        ...opts,
        method: "POST"
    });
}
exports.postAccountsDefault = postAccountsDefault;
/**
 * Get account's basic data
 */
function getAccountsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/accounts/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getAccountsById = getAccountsById;
/**
 * Delete the account
 */
function deleteAccountsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/accounts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAccountsById = deleteAccountsById;
/**
 * Update basic data related to an account
 */
function putAccountsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/accounts/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAccountsById = putAccountsById;
function postAccountsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/accounts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postAccountsById = postAccountsById;
/**
 * Search actions entity (Resource, Candidate, Project, Opportunity, Order, Invoice, Contact)
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/actions.csv?keywords=COMP100*
 *
 */
function getActions(body, { keywords, actionTypes, states, origins, period, startDate, endDate, flags, onlyVisible, returnRelatedActions, keywordsType, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/actions${QS.query(QS.explode({
        keywords,
        actionTypes,
        states,
        origins,
        period,
        startDate,
        endDate,
        flags,
        onlyVisible,
        returnRelatedActions,
        keywordsType,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getActions = getActions;
/**
 * Create an action
 */
function postActions(body, { positioning, delivery } = {}, opts) {
    return oazapfts.fetchJson(`/actions${QS.query(QS.explode({
        positioning,
        delivery
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postActions = postActions;
function deleteActions(opts) {
    return oazapfts.fetchJson("/actions", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteActions = deleteActions;
function putActions(opts) {
    return oazapfts.fetchJson("/actions", {
        ...opts,
        method: "PUT"
    });
}
exports.putActions = putActions;
/**
 * Get empty action's default basic data
 */
function getActionsDefault(body, { resource, candidate, opportunity, project, order, invoice, contact, company, positioning, delivery } = {}, opts) {
    return oazapfts.fetchJson(`/actions/default${QS.query(QS.explode({
        resource,
        candidate,
        opportunity,
        project,
        order,
        invoice,
        contact,
        company,
        positioning,
        delivery
    }))}`, {
        ...opts,
        body
    });
}
exports.getActionsDefault = getActionsDefault;
function putActionsDefault(body, opts) {
    return oazapfts.fetchJson("/actions/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putActionsDefault = putActionsDefault;
function deleteActionsDefault(opts) {
    return oazapfts.fetchJson("/actions/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteActionsDefault = deleteActionsDefault;
function postActionsDefault(opts) {
    return oazapfts.fetchJson("/actions/default", {
        ...opts,
        method: "POST"
    });
}
exports.postActionsDefault = postActionsDefault;
/**
 * Get action's basic data
 */
function getActionsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getActionsById = getActionsById;
/**
 * Delete the action
 */
function deleteActionsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteActionsById = deleteActionsById;
/**
 * Update basic data related to an action
 */
function putActionsById(body, { positioning, delivery, id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/${encodeURIComponent(id)}${QS.query(QS.explode({
        positioning,
        delivery
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putActionsById = putActionsById;
function postActionsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postActionsById = postActionsById;
/**
 * Search templates
 */
function getActionsTemplates(body, { isAdministrator, actionTypes, keywords, dependsOn, dependsOnType, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/actions/templates${QS.query(QS.explode({
        isAdministrator,
        actionTypes,
        keywords,
        dependsOn,
        dependsOnType,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getActionsTemplates = getActionsTemplates;
/**
 * Create a template
 */
function postActionsTemplates(body, opts) {
    return oazapfts.fetchJson("/actions/templates", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postActionsTemplates = postActionsTemplates;
function deleteActionsTemplates(opts) {
    return oazapfts.fetchJson("/actions/templates", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteActionsTemplates = deleteActionsTemplates;
function putActionsTemplates(opts) {
    return oazapfts.fetchJson("/actions/templates", {
        ...opts,
        method: "PUT"
    });
}
exports.putActionsTemplates = putActionsTemplates;
/**
 * Get template's data
 */
function getActionsTemplatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/templates/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getActionsTemplatesById = getActionsTemplatesById;
/**
 * Update data related to a template.
 */
function putActionsTemplatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/templates/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putActionsTemplatesById = putActionsTemplatesById;
/**
 * Delete the template
 */
function deleteActionsTemplatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/templates/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteActionsTemplatesById = deleteActionsTemplatesById;
function postActionsTemplatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/actions/templates/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postActionsTemplatesById = postActionsTemplatesById;
/**
 * Get customer's administrator basic data
 */
function getAdministrator(opts) {
    return oazapfts.fetchJson("/administrator", {
        ...opts
    });
}
exports.getAdministrator = getAdministrator;
function putAdministrator(body, opts) {
    return oazapfts.fetchJson("/administrator", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAdministrator = putAdministrator;
function deleteAdministrator(opts) {
    return oazapfts.fetchJson("/administrator", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAdministrator = deleteAdministrator;
function postAdministrator(opts) {
    return oazapfts.fetchJson("/administrator", {
        ...opts,
        method: "POST"
    });
}
exports.postAdministrator = postAdministrator;
/**
 * Search advantages
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/advantages.csv?keywords=COMP100*
 *
 */
function getAdvantages(body, { keywords, resourceTypes, resourceStates, period, startDate, endDate, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/advantages${QS.query(QS.explode({
        keywords,
        resourceTypes,
        resourceStates,
        period,
        startDate,
        endDate,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getAdvantages = getAdvantages;
/**
 * Create an advantage
 */
function postAdvantages(body, opts) {
    return oazapfts.fetchJson("/advantages", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAdvantages = postAdvantages;
function deleteAdvantages(opts) {
    return oazapfts.fetchJson("/advantages", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAdvantages = deleteAdvantages;
function putAdvantages(opts) {
    return oazapfts.fetchJson("/advantages", {
        ...opts,
        method: "PUT"
    });
}
exports.putAdvantages = putAdvantages;
/**
 * Get empty advantage's default basic data
 */
function getAdvantagesDefault(resource, body, { contract, project, delivery } = {}, opts) {
    return oazapfts.fetchJson(`/advantages/default${QS.query(QS.explode({
        resource,
        contract,
        project,
        delivery
    }))}`, {
        ...opts,
        body
    });
}
exports.getAdvantagesDefault = getAdvantagesDefault;
function putAdvantagesDefault(body, opts) {
    return oazapfts.fetchJson("/advantages/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAdvantagesDefault = putAdvantagesDefault;
function deleteAdvantagesDefault(opts) {
    return oazapfts.fetchJson("/advantages/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAdvantagesDefault = deleteAdvantagesDefault;
function postAdvantagesDefault(opts) {
    return oazapfts.fetchJson("/advantages/default", {
        ...opts,
        method: "POST"
    });
}
exports.postAdvantagesDefault = postAdvantagesDefault;
/**
 * Get advantage's basic data
 */
function getAdvantagesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/advantages/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getAdvantagesById = getAdvantagesById;
/**
 * Delete the advantage
 */
function deleteAdvantagesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/advantages/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAdvantagesById = deleteAdvantagesById;
/**
 * Update basic data related to an advantage
 */
function putAdvantagesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/advantages/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAdvantagesById = putAdvantagesById;
function postAdvantagesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/advantages/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postAdvantagesById = postAdvantagesById;
/**
 * Search agencies
 */
function getAgencies(opts) {
    return oazapfts.fetchJson("/agencies", {
        ...opts
    });
}
exports.getAgencies = getAgencies;
/**
 * Create an agency
 */
function postAgencies(body, opts) {
    return oazapfts.fetchJson("/agencies", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAgencies = postAgencies;
function deleteAgencies(opts) {
    return oazapfts.fetchJson("/agencies", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAgencies = deleteAgencies;
function putAgencies(opts) {
    return oazapfts.fetchJson("/agencies", {
        ...opts,
        method: "PUT"
    });
}
exports.putAgencies = putAgencies;
/**
 * Get empty agency's default information data
 */
function getAgenciesDefault(opts) {
    return oazapfts.fetchJson("/agencies/default", {
        ...opts
    });
}
exports.getAgenciesDefault = getAgenciesDefault;
function putAgenciesDefault(body, opts) {
    return oazapfts.fetchJson("/agencies/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAgenciesDefault = putAgenciesDefault;
function deleteAgenciesDefault(opts) {
    return oazapfts.fetchJson("/agencies/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAgenciesDefault = deleteAgenciesDefault;
function postAgenciesDefault(opts) {
    return oazapfts.fetchJson("/agencies/default", {
        ...opts,
        method: "POST"
    });
}
exports.postAgenciesDefault = postAgenciesDefault;
/**
 * Get agency's basic data
 */
function getAgenciesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/agencies/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getAgenciesById = getAgenciesById;
/**
 * Delete the agency
 */
function deleteAgenciesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/agencies/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAgenciesById = deleteAgenciesById;
function putAgenciesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/agencies/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAgenciesById = putAgenciesById;
function postAgenciesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/agencies/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postAgenciesById = postAgenciesById;
/**
 * Get the list of assignments availables for updating
 */
function getApplicationAssignments(opts) {
    return oazapfts.fetchJson("/application/assignments", {
        ...opts
    });
}
exports.getApplicationAssignments = getApplicationAssignments;
function deleteApplicationAssignments(opts) {
    return oazapfts.fetchJson("/application/assignments", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationAssignments = deleteApplicationAssignments;
function postApplicationAssignments(opts) {
    return oazapfts.fetchJson("/application/assignments", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationAssignments = postApplicationAssignments;
function putApplicationAssignments(opts) {
    return oazapfts.fetchJson("/application/assignments", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationAssignments = putApplicationAssignments;
/**
 * Get current user's data
 */
function getApplicationCurrentUser(opts) {
    return oazapfts.fetchJson("/application/current-user", {
        ...opts
    });
}
exports.getApplicationCurrentUser = getApplicationCurrentUser;
function deleteApplicationCurrentUser(opts) {
    return oazapfts.fetchJson("/application/current-user", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationCurrentUser = deleteApplicationCurrentUser;
function postApplicationCurrentUser(opts) {
    return oazapfts.fetchJson("/application/current-user", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationCurrentUser = postApplicationCurrentUser;
function putApplicationCurrentUser(opts) {
    return oazapfts.fetchJson("/application/current-user", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationCurrentUser = putApplicationCurrentUser;
/**
 * Get the specific translations
 */
function getApplicationDictionary(body, { mergeAllLanguages, language } = {}, opts) {
    return oazapfts.fetchJson(`/application/dictionary${QS.query(QS.explode({
        mergeAllLanguages,
        language
    }))}`, {
        ...opts,
        body
    });
}
exports.getApplicationDictionary = getApplicationDictionary;
/**
 * Update the specific translations
 */
function putApplicationDictionary(body, { language } = {}, opts) {
    return oazapfts.fetchJson(`/application/dictionary${QS.query(QS.explode({
        language
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putApplicationDictionary = putApplicationDictionary;
function deleteApplicationDictionary(opts) {
    return oazapfts.fetchJson("/application/dictionary", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationDictionary = deleteApplicationDictionary;
function postApplicationDictionary(opts) {
    return oazapfts.fetchJson("/application/dictionary", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationDictionary = postApplicationDictionary;
/**
 * Get dictionar's file
 */
function getApplicationDownloadDictionary(body, { language } = {}, opts) {
    return oazapfts.fetchJson(`/application/download-dictionary${QS.query(QS.explode({
        language
    }))}`, {
        ...opts,
        body
    });
}
exports.getApplicationDownloadDictionary = getApplicationDownloadDictionary;
function deleteApplicationDownloadDictionary(opts) {
    return oazapfts.fetchJson("/application/download-dictionary", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationDownloadDictionary = deleteApplicationDownloadDictionary;
function postApplicationDownloadDictionary(opts) {
    return oazapfts.fetchJson("/application/download-dictionary", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationDownloadDictionary = postApplicationDownloadDictionary;
function putApplicationDownloadDictionary(opts) {
    return oazapfts.fetchJson("/application/download-dictionary", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationDownloadDictionary = putApplicationDownloadDictionary;
/**
 * Backup the specific translations
 */
function postApplicationBackupDictionary(opts) {
    return oazapfts.fetchJson("/application/backup-dictionary", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationBackupDictionary = postApplicationBackupDictionary;
function deleteApplicationBackupDictionary(opts) {
    return oazapfts.fetchJson("/application/backup-dictionary", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationBackupDictionary = deleteApplicationBackupDictionary;
function putApplicationBackupDictionary(opts) {
    return oazapfts.fetchJson("/application/backup-dictionary", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationBackupDictionary = putApplicationBackupDictionary;
function getApplicationBackupDictionary(opts) {
    return oazapfts.fetchJson("/application/backup-dictionary", {
        ...opts
    });
}
exports.getApplicationBackupDictionary = getApplicationBackupDictionary;
/**
 * Restore the last specific translations backup
 */
function putApplicationRestoreDictionary(opts) {
    return oazapfts.fetchJson("/application/restore-dictionary", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationRestoreDictionary = putApplicationRestoreDictionary;
function deleteApplicationRestoreDictionary(opts) {
    return oazapfts.fetchJson("/application/restore-dictionary", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationRestoreDictionary = deleteApplicationRestoreDictionary;
function postApplicationRestoreDictionary(opts) {
    return oazapfts.fetchJson("/application/restore-dictionary", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationRestoreDictionary = postApplicationRestoreDictionary;
function getApplicationRestoreDictionary(opts) {
    return oazapfts.fetchJson("/application/restore-dictionary", {
        ...opts
    });
}
exports.getApplicationRestoreDictionary = getApplicationRestoreDictionary;
/**
 * Create a dabatase dump
 */
function postApplicationDumpDatabase(opts) {
    return oazapfts.fetchJson("/application/dump-database", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationDumpDatabase = postApplicationDumpDatabase;
function getApplicationDumpDatabase(opts) {
    return oazapfts.fetchJson("/application/dump-database", {
        ...opts
    });
}
exports.getApplicationDumpDatabase = getApplicationDumpDatabase;
function deleteApplicationDumpDatabase(opts) {
    return oazapfts.fetchJson("/application/dump-database", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationDumpDatabase = deleteApplicationDumpDatabase;
function putApplicationDumpDatabase(opts) {
    return oazapfts.fetchJson("/application/dump-database", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationDumpDatabase = putApplicationDumpDatabase;
/**
 * Get the list of flags availables for searching or updating
 */
function getApplicationFlags(opts) {
    return oazapfts.fetchJson("/application/flags", {
        ...opts
    });
}
exports.getApplicationFlags = getApplicationFlags;
function deleteApplicationFlags(opts) {
    return oazapfts.fetchJson("/application/flags", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationFlags = deleteApplicationFlags;
function postApplicationFlags(opts) {
    return oazapfts.fetchJson("/application/flags", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationFlags = postApplicationFlags;
function putApplicationFlags(opts) {
    return oazapfts.fetchJson("/application/flags", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationFlags = putApplicationFlags;
/**
 * Get the list of perimeters availables for searching
 */
function getApplicationPerimeters(body, { module } = {}, opts) {
    return oazapfts.fetchJson(`/application/perimeters${QS.query(QS.explode({
        module
    }))}`, {
        ...opts,
        body
    });
}
exports.getApplicationPerimeters = getApplicationPerimeters;
function deleteApplicationPerimeters(opts) {
    return oazapfts.fetchJson("/application/perimeters", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationPerimeters = deleteApplicationPerimeters;
function postApplicationPerimeters(opts) {
    return oazapfts.fetchJson("/application/perimeters", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationPerimeters = postApplicationPerimeters;
function putApplicationPerimeters(opts) {
    return oazapfts.fetchJson("/application/perimeters", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationPerimeters = putApplicationPerimeters;
/**
 * Read database thanks to a MySQL query
 */
function postApplicationReadDatabase(body, opts) {
    return oazapfts.fetchJson("/application/read-database", oazapfts.form({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postApplicationReadDatabase = postApplicationReadDatabase;
function deleteApplicationReadDatabase(opts) {
    return oazapfts.fetchJson("/application/read-database", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationReadDatabase = deleteApplicationReadDatabase;
function putApplicationReadDatabase(opts) {
    return oazapfts.fetchJson("/application/read-database", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationReadDatabase = putApplicationReadDatabase;
function getApplicationReadDatabase(opts) {
    return oazapfts.fetchJson("/application/read-database", {
        ...opts
    });
}
exports.getApplicationReadDatabase = getApplicationReadDatabase;
/**
 * Get the specific settings
 */
function getApplicationSettings(opts) {
    return oazapfts.fetchJson("/application/settings", {
        ...opts
    });
}
exports.getApplicationSettings = getApplicationSettings;
/**
 * Update the specific settings
 */
function putApplicationSettings(body, opts) {
    return oazapfts.fetchJson("/application/settings", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putApplicationSettings = putApplicationSettings;
function deleteApplicationSettings(opts) {
    return oazapfts.fetchJson("/application/settings", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationSettings = deleteApplicationSettings;
function postApplicationSettings(opts) {
    return oazapfts.fetchJson("/application/settings", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationSettings = postApplicationSettings;
/**
 * Get status
 */
function getApplicationStatus(opts) {
    return oazapfts.fetchJson("/application/status", {
        ...opts
    });
}
exports.getApplicationStatus = getApplicationStatus;
function deleteApplicationStatus(opts) {
    return oazapfts.fetchJson("/application/status", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationStatus = deleteApplicationStatus;
function postApplicationStatus(opts) {
    return oazapfts.fetchJson("/application/status", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationStatus = postApplicationStatus;
function putApplicationStatus(opts) {
    return oazapfts.fetchJson("/application/status", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationStatus = putApplicationStatus;
/**
 * Get the types of days between 2 dates
 */
function getApplicationWeekendAndBankHolidays(startDate, endDate, body, { calendar } = {}, opts) {
    return oazapfts.fetchJson(`/application/weekendAndBankHolidays${QS.query(QS.explode({
        calendar,
        startDate,
        endDate
    }))}`, {
        ...opts,
        body
    });
}
exports.getApplicationWeekendAndBankHolidays = getApplicationWeekendAndBankHolidays;
function deleteApplicationWeekendAndBankHolidays(opts) {
    return oazapfts.fetchJson("/application/weekendAndBankHolidays", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApplicationWeekendAndBankHolidays = deleteApplicationWeekendAndBankHolidays;
function postApplicationWeekendAndBankHolidays(opts) {
    return oazapfts.fetchJson("/application/weekendAndBankHolidays", {
        ...opts,
        method: "POST"
    });
}
exports.postApplicationWeekendAndBankHolidays = postApplicationWeekendAndBankHolidays;
function putApplicationWeekendAndBankHolidays(opts) {
    return oazapfts.fetchJson("/application/weekendAndBankHolidays", {
        ...opts,
        method: "PUT"
    });
}
exports.putApplicationWeekendAndBankHolidays = putApplicationWeekendAndBankHolidays;
/**
 * Search installed apps
 */
function getApps(opts) {
    return oazapfts.fetchJson("/apps", {
        ...opts
    });
}
exports.getApps = getApps;
function postApps(body, opts) {
    return oazapfts.fetchJson("/apps", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postApps = postApps;
function deleteApps(opts) {
    return oazapfts.fetchJson("/apps", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteApps = deleteApps;
function putApps(opts) {
    return oazapfts.fetchJson("/apps", {
        ...opts,
        method: "PUT"
    });
}
exports.putApps = putApps;
/**
 * Get app's basic data
 */
function getAppsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(id)}`, oazapfts.form({
        ...opts,
        body
    }));
}
exports.getAppsById = getAppsById;
function putAppsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAppsById = putAppsById;
function deleteAppsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAppsById = deleteAppsById;
function postAppsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postAppsById = postAppsById;
/**
 * Install App
 */
function postAppsByAppCodeInstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/install`, oazapfts.form({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAppsByAppCodeInstall = postAppsByAppCodeInstall;
function deleteAppsByAppCodeInstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/install`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAppsByAppCodeInstall = deleteAppsByAppCodeInstall;
function putAppsByAppCodeInstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/install`, {
        ...opts,
        method: "PUT",
        body
    });
}
exports.putAppsByAppCodeInstall = putAppsByAppCodeInstall;
function getAppsByAppCodeInstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/install`, {
        ...opts,
        body
    });
}
exports.getAppsByAppCodeInstall = getAppsByAppCodeInstall;
/**
 * Uninstall App
 */
function deleteAppsByAppCodeUninstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/uninstall`, oazapfts.form({
        ...opts,
        method: "DELETE",
        body
    }));
}
exports.deleteAppsByAppCodeUninstall = deleteAppsByAppCodeUninstall;
function postAppsByAppCodeUninstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/uninstall`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postAppsByAppCodeUninstall = postAppsByAppCodeUninstall;
function putAppsByAppCodeUninstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/uninstall`, {
        ...opts,
        method: "PUT",
        body
    });
}
exports.putAppsByAppCodeUninstall = putAppsByAppCodeUninstall;
function getAppsByAppCodeUninstall(body, { appCode } = {}, opts) {
    return oazapfts.fetchJson(`/apps/${encodeURIComponent(appCode)}/uninstall`, {
        ...opts,
        body
    });
}
exports.getAppsByAppCodeUninstall = getAppsByAppCodeUninstall;
function deleteAppsAbsencesAccounts(opts) {
    return oazapfts.fetchJson("/apps/absences-accounts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsAbsencesAccounts = deleteAppsAbsencesAccounts;
function postAppsAbsencesAccounts(opts) {
    return oazapfts.fetchJson("/apps/absences-accounts", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsAbsencesAccounts = postAppsAbsencesAccounts;
function putAppsAbsencesAccounts(opts) {
    return oazapfts.fetchJson("/apps/absences-accounts", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsAbsencesAccounts = putAppsAbsencesAccounts;
function getAppsAbsencesAccounts(opts) {
    return oazapfts.fetchJson("/apps/absences-accounts", {
        ...opts
    });
}
exports.getAppsAbsencesAccounts = getAppsAbsencesAccounts;
function deleteAppsAccountingPayroll(opts) {
    return oazapfts.fetchJson("/apps/accounting-payroll", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsAccountingPayroll = deleteAppsAccountingPayroll;
function postAppsAccountingPayroll(opts) {
    return oazapfts.fetchJson("/apps/accounting-payroll", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsAccountingPayroll = postAppsAccountingPayroll;
function putAppsAccountingPayroll(opts) {
    return oazapfts.fetchJson("/apps/accounting-payroll", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsAccountingPayroll = putAppsAccountingPayroll;
function getAppsAccountingPayroll(opts) {
    return oazapfts.fetchJson("/apps/accounting-payroll", {
        ...opts
    });
}
exports.getAppsAccountingPayroll = getAppsAccountingPayroll;
function deleteAppsAdvancedCandidates(opts) {
    return oazapfts.fetchJson("/apps/advanced-candidates", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsAdvancedCandidates = deleteAppsAdvancedCandidates;
function postAppsAdvancedCandidates(opts) {
    return oazapfts.fetchJson("/apps/advanced-candidates", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsAdvancedCandidates = postAppsAdvancedCandidates;
function putAppsAdvancedCandidates(opts) {
    return oazapfts.fetchJson("/apps/advanced-candidates", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsAdvancedCandidates = putAppsAdvancedCandidates;
function getAppsAdvancedCandidates(opts) {
    return oazapfts.fetchJson("/apps/advanced-candidates", {
        ...opts
    });
}
exports.getAppsAdvancedCandidates = getAppsAdvancedCandidates;
function deleteAppsAdvancedProjects(opts) {
    return oazapfts.fetchJson("/apps/advanced-projects", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsAdvancedProjects = deleteAppsAdvancedProjects;
function postAppsAdvancedProjects(opts) {
    return oazapfts.fetchJson("/apps/advanced-projects", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsAdvancedProjects = postAppsAdvancedProjects;
function putAppsAdvancedProjects(opts) {
    return oazapfts.fetchJson("/apps/advanced-projects", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsAdvancedProjects = putAppsAdvancedProjects;
function getAppsAdvancedProjects(opts) {
    return oazapfts.fetchJson("/apps/advanced-projects", {
        ...opts
    });
}
exports.getAppsAdvancedProjects = getAppsAdvancedProjects;
function deleteAppsAdvantages(opts) {
    return oazapfts.fetchJson("/apps/advantages", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsAdvantages = deleteAppsAdvantages;
function postAppsAdvantages(opts) {
    return oazapfts.fetchJson("/apps/advantages", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsAdvantages = postAppsAdvantages;
function putAppsAdvantages(opts) {
    return oazapfts.fetchJson("/apps/advantages", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsAdvantages = putAppsAdvantages;
function getAppsAdvantages(opts) {
    return oazapfts.fetchJson("/apps/advantages", {
        ...opts
    });
}
exports.getAppsAdvantages = getAppsAdvantages;
function deleteAppsAnsweringValidators(opts) {
    return oazapfts.fetchJson("/apps/answering-validators", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsAnsweringValidators = deleteAppsAnsweringValidators;
function postAppsAnsweringValidators(opts) {
    return oazapfts.fetchJson("/apps/answering-validators", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsAnsweringValidators = postAppsAnsweringValidators;
function putAppsAnsweringValidators(opts) {
    return oazapfts.fetchJson("/apps/answering-validators", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsAnsweringValidators = putAppsAnsweringValidators;
function getAppsAnsweringValidators(opts) {
    return oazapfts.fetchJson("/apps/answering-validators", {
        ...opts
    });
}
exports.getAppsAnsweringValidators = getAppsAnsweringValidators;
function deleteAppsBackupDatabase(opts) {
    return oazapfts.fetchJson("/apps/backup-database", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsBackupDatabase = deleteAppsBackupDatabase;
function postAppsBackupDatabase(opts) {
    return oazapfts.fetchJson("/apps/backup-database", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsBackupDatabase = postAppsBackupDatabase;
function putAppsBackupDatabase(opts) {
    return oazapfts.fetchJson("/apps/backup-database", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsBackupDatabase = putAppsBackupDatabase;
function getAppsBackupDatabase(opts) {
    return oazapfts.fetchJson("/apps/backup-database", {
        ...opts
    });
}
exports.getAppsBackupDatabase = getAppsBackupDatabase;
function deleteAppsContracts(opts) {
    return oazapfts.fetchJson("/apps/contracts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsContracts = deleteAppsContracts;
function postAppsContracts(opts) {
    return oazapfts.fetchJson("/apps/contracts", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsContracts = postAppsContracts;
function putAppsContracts(opts) {
    return oazapfts.fetchJson("/apps/contracts", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsContracts = putAppsContracts;
function getAppsContracts(opts) {
    return oazapfts.fetchJson("/apps/contracts", {
        ...opts
    });
}
exports.getAppsContracts = getAppsContracts;
function deleteAppsCorporama(opts) {
    return oazapfts.fetchJson("/apps/corporama", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsCorporama = deleteAppsCorporama;
function postAppsCorporama(opts) {
    return oazapfts.fetchJson("/apps/corporama", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsCorporama = postAppsCorporama;
function putAppsCorporama(opts) {
    return oazapfts.fetchJson("/apps/corporama", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsCorporama = putAppsCorporama;
function getAppsCorporama(opts) {
    return oazapfts.fetchJson("/apps/corporama", {
        ...opts
    });
}
exports.getAppsCorporama = getAppsCorporama;
function deleteAppsCorporateDocuments(opts) {
    return oazapfts.fetchJson("/apps/corporate-documents", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsCorporateDocuments = deleteAppsCorporateDocuments;
function postAppsCorporateDocuments(opts) {
    return oazapfts.fetchJson("/apps/corporate-documents", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsCorporateDocuments = postAppsCorporateDocuments;
function putAppsCorporateDocuments(opts) {
    return oazapfts.fetchJson("/apps/corporate-documents", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsCorporateDocuments = putAppsCorporateDocuments;
function getAppsCorporateDocuments(opts) {
    return oazapfts.fetchJson("/apps/corporate-documents", {
        ...opts
    });
}
exports.getAppsCorporateDocuments = getAppsCorporateDocuments;
function getAppsCreateActivityDocuments(opts) {
    return oazapfts.fetchJson("/apps/create-activity-documents", {
        ...opts
    });
}
exports.getAppsCreateActivityDocuments = getAppsCreateActivityDocuments;
function putAppsCreateActivityDocuments(body, opts) {
    return oazapfts.fetchJson("/apps/create-activity-documents", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAppsCreateActivityDocuments = putAppsCreateActivityDocuments;
function deleteAppsCreateActivityDocuments(opts) {
    return oazapfts.fetchJson("/apps/create-activity-documents", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsCreateActivityDocuments = deleteAppsCreateActivityDocuments;
function postAppsCreateActivityDocuments(opts) {
    return oazapfts.fetchJson("/apps/create-activity-documents", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsCreateActivityDocuments = postAppsCreateActivityDocuments;
function deleteAppsDataClosing(opts) {
    return oazapfts.fetchJson("/apps/data-closing", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsDataClosing = deleteAppsDataClosing;
function postAppsDataClosing(opts) {
    return oazapfts.fetchJson("/apps/data-closing", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsDataClosing = postAppsDataClosing;
function putAppsDataClosing(opts) {
    return oazapfts.fetchJson("/apps/data-closing", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsDataClosing = putAppsDataClosing;
function getAppsDataClosing(opts) {
    return oazapfts.fetchJson("/apps/data-closing", {
        ...opts
    });
}
exports.getAppsDataClosing = getAppsDataClosing;
function deleteAppsDocTemplates(opts) {
    return oazapfts.fetchJson("/apps/doc-templates", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsDocTemplates = deleteAppsDocTemplates;
function postAppsDocTemplates(opts) {
    return oazapfts.fetchJson("/apps/doc-templates", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsDocTemplates = postAppsDocTemplates;
function putAppsDocTemplates(opts) {
    return oazapfts.fetchJson("/apps/doc-templates", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsDocTemplates = putAppsDocTemplates;
function getAppsDocTemplates(opts) {
    return oazapfts.fetchJson("/apps/doc-templates", {
        ...opts
    });
}
exports.getAppsDocTemplates = getAppsDocTemplates;
function getAppsEmailing(opts) {
    return oazapfts.fetchJson("/apps/emailing", {
        ...opts
    });
}
exports.getAppsEmailing = getAppsEmailing;
function putAppsEmailing(body, opts) {
    return oazapfts.fetchJson("/apps/emailing", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAppsEmailing = putAppsEmailing;
function deleteAppsEmailing(opts) {
    return oazapfts.fetchJson("/apps/emailing", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsEmailing = deleteAppsEmailing;
function postAppsEmailing(opts) {
    return oazapfts.fetchJson("/apps/emailing", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsEmailing = postAppsEmailing;
function deleteAppsExceptionalActivity(opts) {
    return oazapfts.fetchJson("/apps/exceptional-activity", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsExceptionalActivity = deleteAppsExceptionalActivity;
function postAppsExceptionalActivity(opts) {
    return oazapfts.fetchJson("/apps/exceptional-activity", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsExceptionalActivity = postAppsExceptionalActivity;
function putAppsExceptionalActivity(opts) {
    return oazapfts.fetchJson("/apps/exceptional-activity", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsExceptionalActivity = putAppsExceptionalActivity;
function getAppsExceptionalActivity(opts) {
    return oazapfts.fetchJson("/apps/exceptional-activity", {
        ...opts
    });
}
exports.getAppsExceptionalActivity = getAppsExceptionalActivity;
function getAppsExtractBi(opts) {
    return oazapfts.fetchJson("/apps/extract-bi", {
        ...opts
    });
}
exports.getAppsExtractBi = getAppsExtractBi;
function putAppsExtractBi(body, opts) {
    return oazapfts.fetchJson("/apps/extract-bi", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAppsExtractBi = putAppsExtractBi;
function deleteAppsExtractBi(opts) {
    return oazapfts.fetchJson("/apps/extract-bi", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsExtractBi = deleteAppsExtractBi;
function postAppsExtractBi(opts) {
    return oazapfts.fetchJson("/apps/extract-bi", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsExtractBi = postAppsExtractBi;
function deleteAppsExtractPayroll(opts) {
    return oazapfts.fetchJson("/apps/extract-payroll", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsExtractPayroll = deleteAppsExtractPayroll;
function postAppsExtractPayroll(opts) {
    return oazapfts.fetchJson("/apps/extract-payroll", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsExtractPayroll = postAppsExtractPayroll;
function putAppsExtractPayroll(opts) {
    return oazapfts.fetchJson("/apps/extract-payroll", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsExtractPayroll = putAppsExtractPayroll;
function getAppsExtractPayroll(opts) {
    return oazapfts.fetchJson("/apps/extract-payroll", {
        ...opts
    });
}
exports.getAppsExtractPayroll = getAppsExtractPayroll;
function deleteAppsGcalendar(opts) {
    return oazapfts.fetchJson("/apps/gcalendar", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsGcalendar = deleteAppsGcalendar;
function postAppsGcalendar(opts) {
    return oazapfts.fetchJson("/apps/gcalendar", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsGcalendar = postAppsGcalendar;
function putAppsGcalendar(opts) {
    return oazapfts.fetchJson("/apps/gcalendar", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsGcalendar = putAppsGcalendar;
function getAppsGcalendar(opts) {
    return oazapfts.fetchJson("/apps/gcalendar", {
        ...opts
    });
}
exports.getAppsGcalendar = getAppsGcalendar;
function deleteAppsGmail(opts) {
    return oazapfts.fetchJson("/apps/gmail", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsGmail = deleteAppsGmail;
function postAppsGmail(opts) {
    return oazapfts.fetchJson("/apps/gmail", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsGmail = postAppsGmail;
function putAppsGmail(opts) {
    return oazapfts.fetchJson("/apps/gmail", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsGmail = putAppsGmail;
function getAppsGmail(opts) {
    return oazapfts.fetchJson("/apps/gmail", {
        ...opts
    });
}
exports.getAppsGmail = getAppsGmail;
function deleteAppsGviewer(opts) {
    return oazapfts.fetchJson("/apps/gviewer", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsGviewer = deleteAppsGviewer;
function postAppsGviewer(opts) {
    return oazapfts.fetchJson("/apps/gviewer", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsGviewer = postAppsGviewer;
function putAppsGviewer(opts) {
    return oazapfts.fetchJson("/apps/gviewer", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsGviewer = putAppsGviewer;
function getAppsGviewer(opts) {
    return oazapfts.fetchJson("/apps/gviewer", {
        ...opts
    });
}
exports.getAppsGviewer = getAppsGviewer;
function deleteAppsHourAccounts(opts) {
    return oazapfts.fetchJson("/apps/hour-accounts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsHourAccounts = deleteAppsHourAccounts;
function postAppsHourAccounts(opts) {
    return oazapfts.fetchJson("/apps/hour-accounts", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsHourAccounts = postAppsHourAccounts;
function putAppsHourAccounts(opts) {
    return oazapfts.fetchJson("/apps/hour-accounts", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsHourAccounts = putAppsHourAccounts;
function getAppsHourAccounts(opts) {
    return oazapfts.fetchJson("/apps/hour-accounts", {
        ...opts
    });
}
exports.getAppsHourAccounts = getAppsHourAccounts;
function deleteAppsIntranetAccounts(opts) {
    return oazapfts.fetchJson("/apps/intranet-accounts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsIntranetAccounts = deleteAppsIntranetAccounts;
function postAppsIntranetAccounts(opts) {
    return oazapfts.fetchJson("/apps/intranet-accounts", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsIntranetAccounts = postAppsIntranetAccounts;
function putAppsIntranetAccounts(opts) {
    return oazapfts.fetchJson("/apps/intranet-accounts", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsIntranetAccounts = putAppsIntranetAccounts;
function getAppsIntranetAccounts(opts) {
    return oazapfts.fetchJson("/apps/intranet-accounts", {
        ...opts
    });
}
exports.getAppsIntranetAccounts = getAppsIntranetAccounts;
function deleteAppsMarkers(opts) {
    return oazapfts.fetchJson("/apps/markers", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsMarkers = deleteAppsMarkers;
function postAppsMarkers(opts) {
    return oazapfts.fetchJson("/apps/markers", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsMarkers = postAppsMarkers;
function putAppsMarkers(opts) {
    return oazapfts.fetchJson("/apps/markers", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsMarkers = putAppsMarkers;
function getAppsMarkers(opts) {
    return oazapfts.fetchJson("/apps/markers", {
        ...opts
    });
}
exports.getAppsMarkers = getAppsMarkers;
function deleteAppsMicrosoft(opts) {
    return oazapfts.fetchJson("/apps/microsoft", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsMicrosoft = deleteAppsMicrosoft;
function postAppsMicrosoft(opts) {
    return oazapfts.fetchJson("/apps/microsoft", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsMicrosoft = postAppsMicrosoft;
function putAppsMicrosoft(opts) {
    return oazapfts.fetchJson("/apps/microsoft", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsMicrosoft = putAppsMicrosoft;
function getAppsMicrosoft(opts) {
    return oazapfts.fetchJson("/apps/microsoft", {
        ...opts
    });
}
exports.getAppsMicrosoft = getAppsMicrosoft;
function deleteAppsNotifications(opts) {
    return oazapfts.fetchJson("/apps/notifications", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsNotifications = deleteAppsNotifications;
function postAppsNotifications(opts) {
    return oazapfts.fetchJson("/apps/notifications", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsNotifications = postAppsNotifications;
function putAppsNotifications(opts) {
    return oazapfts.fetchJson("/apps/notifications", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsNotifications = putAppsNotifications;
function getAppsNotifications(opts) {
    return oazapfts.fetchJson("/apps/notifications", {
        ...opts
    });
}
exports.getAppsNotifications = getAppsNotifications;
function deleteAppsOrganizationCharts(opts) {
    return oazapfts.fetchJson("/apps/organization-charts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsOrganizationCharts = deleteAppsOrganizationCharts;
function postAppsOrganizationCharts(opts) {
    return oazapfts.fetchJson("/apps/organization-charts", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsOrganizationCharts = postAppsOrganizationCharts;
function putAppsOrganizationCharts(opts) {
    return oazapfts.fetchJson("/apps/organization-charts", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsOrganizationCharts = putAppsOrganizationCharts;
function getAppsOrganizationCharts(opts) {
    return oazapfts.fetchJson("/apps/organization-charts", {
        ...opts
    });
}
exports.getAppsOrganizationCharts = getAppsOrganizationCharts;
function deleteAppsPlanProduction(opts) {
    return oazapfts.fetchJson("/apps/plan-production", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsPlanProduction = deleteAppsPlanProduction;
function postAppsPlanProduction(opts) {
    return oazapfts.fetchJson("/apps/plan-production", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsPlanProduction = postAppsPlanProduction;
function putAppsPlanProduction(opts) {
    return oazapfts.fetchJson("/apps/plan-production", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsPlanProduction = putAppsPlanProduction;
function getAppsPlanProduction(opts) {
    return oazapfts.fetchJson("/apps/plan-production", {
        ...opts
    });
}
exports.getAppsPlanProduction = getAppsPlanProduction;
function deleteAppsPostProduction(opts) {
    return oazapfts.fetchJson("/apps/post-production", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsPostProduction = deleteAppsPostProduction;
function postAppsPostProduction(opts) {
    return oazapfts.fetchJson("/apps/post-production", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsPostProduction = postAppsPostProduction;
function putAppsPostProduction(opts) {
    return oazapfts.fetchJson("/apps/post-production", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsPostProduction = putAppsPostProduction;
function getAppsPostProduction(opts) {
    return oazapfts.fetchJson("/apps/post-production", {
        ...opts
    });
}
exports.getAppsPostProduction = getAppsPostProduction;
function deleteAppsQuotations(opts) {
    return oazapfts.fetchJson("/apps/quotations", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsQuotations = deleteAppsQuotations;
function postAppsQuotations(opts) {
    return oazapfts.fetchJson("/apps/quotations", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsQuotations = postAppsQuotations;
function putAppsQuotations(opts) {
    return oazapfts.fetchJson("/apps/quotations", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsQuotations = putAppsQuotations;
function getAppsQuotations(opts) {
    return oazapfts.fetchJson("/apps/quotations", {
        ...opts
    });
}
exports.getAppsQuotations = getAppsQuotations;
function deleteAppsResourcePlanner(opts) {
    return oazapfts.fetchJson("/apps/resource-planner", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsResourcePlanner = deleteAppsResourcePlanner;
function postAppsResourcePlanner(opts) {
    return oazapfts.fetchJson("/apps/resource-planner", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsResourcePlanner = postAppsResourcePlanner;
function putAppsResourcePlanner(opts) {
    return oazapfts.fetchJson("/apps/resource-planner", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsResourcePlanner = putAppsResourcePlanner;
function getAppsResourcePlanner(opts) {
    return oazapfts.fetchJson("/apps/resource-planner", {
        ...opts
    });
}
exports.getAppsResourcePlanner = getAppsResourcePlanner;
function getAppsSaasEditor(opts) {
    return oazapfts.fetchJson("/apps/saas-editor", {
        ...opts
    });
}
exports.getAppsSaasEditor = getAppsSaasEditor;
function putAppsSaasEditor(body, opts) {
    return oazapfts.fetchJson("/apps/saas-editor", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putAppsSaasEditor = putAppsSaasEditor;
function deleteAppsSaasEditor(opts) {
    return oazapfts.fetchJson("/apps/saas-editor", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsSaasEditor = deleteAppsSaasEditor;
function postAppsSaasEditor(opts) {
    return oazapfts.fetchJson("/apps/saas-editor", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsSaasEditor = postAppsSaasEditor;
function deleteAppsSepa(opts) {
    return oazapfts.fetchJson("/apps/sepa", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsSepa = deleteAppsSepa;
function postAppsSepa(opts) {
    return oazapfts.fetchJson("/apps/sepa", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsSepa = postAppsSepa;
function putAppsSepa(opts) {
    return oazapfts.fetchJson("/apps/sepa", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsSepa = putAppsSepa;
function getAppsSepa(opts) {
    return oazapfts.fetchJson("/apps/sepa", {
        ...opts
    });
}
exports.getAppsSepa = getAppsSepa;
function deleteAppsSpecialReporting(opts) {
    return oazapfts.fetchJson("/apps/special-reporting", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsSpecialReporting = deleteAppsSpecialReporting;
function postAppsSpecialReporting(opts) {
    return oazapfts.fetchJson("/apps/special-reporting", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsSpecialReporting = postAppsSpecialReporting;
function putAppsSpecialReporting(opts) {
    return oazapfts.fetchJson("/apps/special-reporting", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsSpecialReporting = putAppsSpecialReporting;
function getAppsSpecialReporting(opts) {
    return oazapfts.fetchJson("/apps/special-reporting", {
        ...opts
    });
}
exports.getAppsSpecialReporting = getAppsSpecialReporting;
function deleteAppsSurvey(opts) {
    return oazapfts.fetchJson("/apps/survey", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteAppsSurvey = deleteAppsSurvey;
function postAppsSurvey(opts) {
    return oazapfts.fetchJson("/apps/survey", {
        ...opts,
        method: "POST"
    });
}
exports.postAppsSurvey = postAppsSurvey;
function putAppsSurvey(opts) {
    return oazapfts.fetchJson("/apps/survey", {
        ...opts,
        method: "PUT"
    });
}
exports.putAppsSurvey = putAppsSurvey;
function getAppsSurvey(opts) {
    return oazapfts.fetchJson("/apps/survey", {
        ...opts
    });
}
exports.getAppsSurvey = getAppsSurvey;
/**
 * Create an attached flag
 */
function postAttachedFlags(body, opts) {
    return oazapfts.fetchJson("/attached-flags", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postAttachedFlags = postAttachedFlags;
/**
 * Delete an attached flag
 */
function deleteAttachedFlags(flag, body, { company, opportunity, project, order, product, purchase, action, resource, candidate, positioning, contact, invoice } = {}, opts) {
    return oazapfts.fetchJson(`/attached-flags${QS.query(QS.explode({
        company,
        opportunity,
        project,
        order,
        product,
        purchase,
        action,
        resource,
        candidate,
        positioning,
        contact,
        invoice,
        flag
    }))}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteAttachedFlags = deleteAttachedFlags;
function getAttachedFlags(opts) {
    return oazapfts.fetchJson("/attached-flags", {
        ...opts
    });
}
exports.getAttachedFlags = getAttachedFlags;
function putAttachedFlags(opts) {
    return oazapfts.fetchJson("/attached-flags", {
        ...opts,
        method: "PUT"
    });
}
exports.putAttachedFlags = putAttachedFlags;
/**
 * Search deliveries or purchases with a billing balance
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/billing-deliveries-purchases-balance.csv?keywords=PRJ1*
 *
 */
function getBillingDeliveriesPurchasesBalance(body, { keywords, projectTypes, projectStates, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/billing-deliveries-purchases-balance${QS.query(QS.explode({
        keywords,
        projectTypes,
        projectStates,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getBillingDeliveriesPurchasesBalance = getBillingDeliveriesPurchasesBalance;
function postBillingDeliveriesPurchasesBalance(body, opts) {
    return oazapfts.fetchJson("/billing-deliveries-purchases-balance", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postBillingDeliveriesPurchasesBalance = postBillingDeliveriesPurchasesBalance;
function deleteBillingDeliveriesPurchasesBalance(opts) {
    return oazapfts.fetchJson("/billing-deliveries-purchases-balance", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteBillingDeliveriesPurchasesBalance = deleteBillingDeliveriesPurchasesBalance;
function putBillingDeliveriesPurchasesBalance(opts) {
    return oazapfts.fetchJson("/billing-deliveries-purchases-balance", {
        ...opts,
        method: "PUT"
    });
}
exports.putBillingDeliveriesPurchasesBalance = putBillingDeliveriesPurchasesBalance;
/**
 * Search orders with a monthly billing balance
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/billing-monthly-balance.csv?keywords=BDC1*
 *
 */
function getBillingMonthlyBalance(startMonth, body, { keywords, projectTypes, orderPaymentMethods, orderStates, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/billing-monthly-balance${QS.query(QS.explode({
        keywords,
        projectTypes,
        orderPaymentMethods,
        orderStates,
        startMonth,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getBillingMonthlyBalance = getBillingMonthlyBalance;
function postBillingMonthlyBalance(body, opts) {
    return oazapfts.fetchJson("/billing-monthly-balance", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postBillingMonthlyBalance = postBillingMonthlyBalance;
function deleteBillingMonthlyBalance(opts) {
    return oazapfts.fetchJson("/billing-monthly-balance", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteBillingMonthlyBalance = deleteBillingMonthlyBalance;
function putBillingMonthlyBalance(opts) {
    return oazapfts.fetchJson("/billing-monthly-balance", {
        ...opts,
        method: "PUT"
    });
}
exports.putBillingMonthlyBalance = putBillingMonthlyBalance;
/**
 * Search projects with a billing balance
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/billing-projects-balance.csv?keywords=PRJ1*
 *
 */
function getBillingProjectsBalance(body, { keywords, projectTypes, projectStates, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/billing-projects-balance${QS.query(QS.explode({
        keywords,
        projectTypes,
        projectStates,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getBillingProjectsBalance = getBillingProjectsBalance;
function postBillingProjectsBalance(body, opts) {
    return oazapfts.fetchJson("/billing-projects-balance", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postBillingProjectsBalance = postBillingProjectsBalance;
function deleteBillingProjectsBalance(opts) {
    return oazapfts.fetchJson("/billing-projects-balance", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteBillingProjectsBalance = deleteBillingProjectsBalance;
function putBillingProjectsBalance(opts) {
    return oazapfts.fetchJson("/billing-projects-balance", {
        ...opts,
        method: "PUT"
    });
}
exports.putBillingProjectsBalance = putBillingProjectsBalance;
/**
 * Search schedules with a billing balance
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/billing-schedules-balance.csv?keywords=BDC1*
 *
 */
function getBillingSchedulesBalance(body, { keywords, projectTypes, orderPaymentMethods, orderStates, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/billing-schedules-balance${QS.query(QS.explode({
        keywords,
        projectTypes,
        orderPaymentMethods,
        orderStates,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getBillingSchedulesBalance = getBillingSchedulesBalance;
function postBillingSchedulesBalance(body, opts) {
    return oazapfts.fetchJson("/billing-schedules-balance", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postBillingSchedulesBalance = postBillingSchedulesBalance;
function deleteBillingSchedulesBalance(opts) {
    return oazapfts.fetchJson("/billing-schedules-balance", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteBillingSchedulesBalance = deleteBillingSchedulesBalance;
function putBillingSchedulesBalance(opts) {
    return oazapfts.fetchJson("/billing-schedules-balance", {
        ...opts,
        method: "PUT"
    });
}
exports.putBillingSchedulesBalance = putBillingSchedulesBalance;
/**
 * Search business units
 */
function getBusinessUnits(opts) {
    return oazapfts.fetchJson("/business-units", {
        ...opts
    });
}
exports.getBusinessUnits = getBusinessUnits;
/**
 * Create a business units
 */
function postBusinessUnits(body, opts) {
    return oazapfts.fetchJson("/business-units", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postBusinessUnits = postBusinessUnits;
function deleteBusinessUnits(opts) {
    return oazapfts.fetchJson("/business-units", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteBusinessUnits = deleteBusinessUnits;
function putBusinessUnits(opts) {
    return oazapfts.fetchJson("/business-units", {
        ...opts,
        method: "PUT"
    });
}
exports.putBusinessUnits = putBusinessUnits;
/**
 * Get empty business unit's default information data
 */
function getBusinessUnitsDefault(opts) {
    return oazapfts.fetchJson("/business-units/default", {
        ...opts
    });
}
exports.getBusinessUnitsDefault = getBusinessUnitsDefault;
function putBusinessUnitsDefault(body, opts) {
    return oazapfts.fetchJson("/business-units/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putBusinessUnitsDefault = putBusinessUnitsDefault;
function deleteBusinessUnitsDefault(opts) {
    return oazapfts.fetchJson("/business-units/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteBusinessUnitsDefault = deleteBusinessUnitsDefault;
function postBusinessUnitsDefault(opts) {
    return oazapfts.fetchJson("/business-units/default", {
        ...opts,
        method: "POST"
    });
}
exports.postBusinessUnitsDefault = postBusinessUnitsDefault;
/**
 * Get business unit's basic data
 */
function getBusinessUnitsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/business-units/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getBusinessUnitsById = getBusinessUnitsById;
/**
 * Delete the business unit
 */
function deleteBusinessUnitsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/business-units/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteBusinessUnitsById = deleteBusinessUnitsById;
/**
 * Update basic data related to a business unit
 */
function putBusinessUnitsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/business-units/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putBusinessUnitsById = putBusinessUnitsById;
function postBusinessUnitsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/business-units/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postBusinessUnitsById = postBusinessUnitsById;
/**
 * Search calendars
 */
function getCalendars(opts) {
    return oazapfts.fetchJson("/calendars", {
        ...opts
    });
}
exports.getCalendars = getCalendars;
function postCalendars(body, opts) {
    return oazapfts.fetchJson("/calendars", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postCalendars = postCalendars;
function deleteCalendars(opts) {
    return oazapfts.fetchJson("/calendars", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteCalendars = deleteCalendars;
function putCalendars(opts) {
    return oazapfts.fetchJson("/calendars", {
        ...opts,
        method: "PUT"
    });
}
exports.putCalendars = putCalendars;
/**
 * Get empty calendar's default data
 */
function getCalendarsDefault(body, { year, iso } = {}, opts) {
    return oazapfts.fetchJson(`/calendars/default${QS.query(QS.explode({
        year,
        iso
    }))}`, {
        ...opts,
        body
    });
}
exports.getCalendarsDefault = getCalendarsDefault;
function putCalendarsDefault(body, opts) {
    return oazapfts.fetchJson("/calendars/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putCalendarsDefault = putCalendarsDefault;
function deleteCalendarsDefault(opts) {
    return oazapfts.fetchJson("/calendars/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteCalendarsDefault = deleteCalendarsDefault;
function postCalendarsDefault(opts) {
    return oazapfts.fetchJson("/calendars/default", {
        ...opts,
        method: "POST"
    });
}
exports.postCalendarsDefault = postCalendarsDefault;
/**
 * Get calendar's basic data
 */
function getCalendarsById(body, { year, iso, id } = {}, opts) {
    return oazapfts.fetchJson(`/calendars/${encodeURIComponent(id)}${QS.query(QS.explode({
        year,
        iso
    }))}`, {
        ...opts,
        body
    });
}
exports.getCalendarsById = getCalendarsById;
/**
 * Update basic data related to a calendar
 */
function putCalendarsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/calendars/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putCalendarsById = putCalendarsById;
function deleteCalendarsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/calendars/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteCalendarsById = deleteCalendarsById;
function postCalendarsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/calendars/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postCalendarsById = postCalendarsById;
/**
 * Search candidates
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/candidates.csv?keywords=CAND100*
 *
 */
function getCandidates(body, { keywords, keywordsType, returnMoreData, contractTypes, activityAreas, expertiseAreas, tools, mobilityAreas, experiences, trainings, period, startDate, endDate, flags, candidateStates, perimeterManagersType, availabilityTypes, languages, evaluations, sources, candidateTypes, onlyVisible, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/candidates${QS.query(QS.explode({
        keywords,
        keywordsType,
        returnMoreData,
        contractTypes,
        activityAreas,
        expertiseAreas,
        tools,
        mobilityAreas,
        experiences,
        trainings,
        period,
        startDate,
        endDate,
        flags,
        candidateStates,
        perimeterManagersType,
        availabilityTypes,
        languages,
        evaluations,
        sources,
        candidateTypes,
        onlyVisible,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getCandidates = getCandidates;
/**
 * Create a candidate
 */
function postCandidates(body, opts) {
    return oazapfts.fetchJson("/candidates", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postCandidates = postCandidates;
function deleteCandidates(opts) {
    return oazapfts.fetchJson("/candidates", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteCandidates = deleteCandidates;
function putCandidates(opts) {
    return oazapfts.fetchJson("/candidates", {
        ...opts,
        method: "PUT"
    });
}
exports.putCandidates = putCandidates;
/**
 * Get empty candidate's default information data
 */
function getCandidatesDefault(opts) {
    return oazapfts.fetchJson("/candidates/default", {
        ...opts
    });
}
exports.getCandidatesDefault = getCandidatesDefault;
function putCandidatesDefault(body, opts) {
    return oazapfts.fetchJson("/candidates/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putCandidatesDefault = putCandidatesDefault;
function deleteCandidatesDefault(opts) {
    return oazapfts.fetchJson("/candidates/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteCandidatesDefault = deleteCandidatesDefault;
function postCandidatesDefault(opts) {
    return oazapfts.fetchJson("/candidates/default", {
        ...opts,
        method: "POST"
    });
}
exports.postCandidatesDefault = postCandidatesDefault;
/**
 * Get candidate's basic data
 */
function getCandidatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/candidates/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getCandidatesById = getCandidatesById;
function putCandidatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/candidates/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putCandidatesById = putCandidatesById;
function deleteCandidatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/candidates/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteCandidatesById = deleteCandidatesById;
function postCandidatesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/candidates/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postCandidatesById = postCandidatesById;
/**
 * Get resource's chart
 */
function getChartsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/charts/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getChartsById = getChartsById;
function putChartsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/charts/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putChartsById = putChartsById;
function deleteChartsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/charts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteChartsById = deleteChartsById;
function postChartsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/charts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postChartsById = postChartsById;
/**
 * Search companies
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/companies.csv?keywords=CSOC100*
 *
 */
function getCompanies(body, { keywords, keywordsType, returnMoreData, states, expertiseAreas, origins, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/companies${QS.query(QS.explode({
        keywords,
        keywordsType,
        returnMoreData,
        states,
        expertiseAreas,
        origins,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getCompanies = getCompanies;
/**
 * Create a company
 */
function postCompanies(body, opts) {
    return oazapfts.fetchJson("/companies", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postCompanies = postCompanies;
function deleteCompanies(opts) {
    return oazapfts.fetchJson("/companies", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteCompanies = deleteCompanies;
function putCompanies(opts) {
    return oazapfts.fetchJson("/companies", {
        ...opts,
        method: "PUT"
    });
}
exports.putCompanies = putCompanies;
/**
 * Get empty company's default information data
 */
function getCompaniesDefault(opts) {
    return oazapfts.fetchJson("/companies/default", {
        ...opts
    });
}
exports.getCompaniesDefault = getCompaniesDefault;
function putCompaniesDefault(body, opts) {
    return oazapfts.fetchJson("/companies/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putCompaniesDefault = putCompaniesDefault;
function deleteCompaniesDefault(opts) {
    return oazapfts.fetchJson("/companies/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteCompaniesDefault = deleteCompaniesDefault;
function postCompaniesDefault(opts) {
    return oazapfts.fetchJson("/companies/default", {
        ...opts,
        method: "POST"
    });
}
exports.postCompaniesDefault = postCompaniesDefault;
/**
 * Get company's basic data
 */
function getCompaniesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/companies/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getCompaniesById = getCompaniesById;
/**
 * Delete the company
 */
function deleteCompaniesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/companies/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteCompaniesById = deleteCompaniesById;
function putCompaniesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/companies/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putCompaniesById = putCompaniesById;
function postCompaniesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/companies/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postCompaniesById = postCompaniesById;
/**
 * Search threads
 */
function getThreads(body, { keywords, typeOf, period, startDate, endDate, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/threads${QS.query(QS.explode({
        keywords,
        typeOf,
        period,
        startDate,
        endDate,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getThreads = getThreads;
/**
 * Create a thread
 */
function postThreads(body, { parent } = {}, opts) {
    return oazapfts.fetchJson(`/threads${QS.query(QS.explode({
        parent
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postThreads = postThreads;
function deleteThreads(opts) {
    return oazapfts.fetchJson("/threads", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteThreads = deleteThreads;
function putThreads(opts) {
    return oazapfts.fetchJson("/threads", {
        ...opts,
        method: "PUT"
    });
}
exports.putThreads = putThreads;
/**
 * Get empty thread's default basic data
 */
function getThreadsDefault(typeOf, body, { resource, candidate, project, contact, company, opportunity, order, invoice, product, purchase, payment, delivery, inactivity, groupment, action, positioning, timesReport, expensesReport, absencesReport, contract, advantage, quotation, thread } = {}, opts) {
    return oazapfts.fetchJson(`/threads/default${QS.query(QS.explode({
        typeOf,
        resource,
        candidate,
        project,
        contact,
        company,
        opportunity,
        order,
        invoice,
        product,
        purchase,
        payment,
        delivery,
        inactivity,
        groupment,
        action,
        positioning,
        timesReport,
        expensesReport,
        absencesReport,
        contract,
        advantage,
        quotation,
        thread
    }))}`, {
        ...opts,
        body
    });
}
exports.getThreadsDefault = getThreadsDefault;
function putThreadsDefault(body, opts) {
    return oazapfts.fetchJson("/threads/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putThreadsDefault = putThreadsDefault;
function deleteThreadsDefault(opts) {
    return oazapfts.fetchJson("/threads/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteThreadsDefault = deleteThreadsDefault;
function postThreadsDefault(opts) {
    return oazapfts.fetchJson("/threads/default", {
        ...opts,
        method: "POST"
    });
}
exports.postThreadsDefault = postThreadsDefault;
/**
 * Get thread's basic data
 */
function getThreadsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/threads/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getThreadsById = getThreadsById;
/**
 * Delete thread
 */
function deleteThreadsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/threads/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteThreadsById = deleteThreadsById;
/**
 * Update thread
 */
function putThreadsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/threads/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putThreadsById = putThreadsById;
function postThreadsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/threads/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postThreadsById = postThreadsById;
/**
 * Search contacts
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/contacts.csv?keywords=CCON100*
 *
 */
function getContacts(body, { keywords, keywordsType, returnMoreData, states, activityAreas, tools, expertiseAreas, origins, period, startDate, endDate, flags, encoding, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/contacts${QS.query(QS.explode({
        keywords,
        keywordsType,
        returnMoreData,
        states,
        activityAreas,
        tools,
        expertiseAreas,
        origins,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getContacts = getContacts;
/**
 * Create a contact
 */
function postContacts(body, opts) {
    return oazapfts.fetchJson("/contacts", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postContacts = postContacts;
function deleteContacts(opts) {
    return oazapfts.fetchJson("/contacts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteContacts = deleteContacts;
function putContacts(opts) {
    return oazapfts.fetchJson("/contacts", {
        ...opts,
        method: "PUT"
    });
}
exports.putContacts = putContacts;
/**
 * Get empty contact's default information data
 */
function getContactsDefault(company, body, opts) {
    return oazapfts.fetchJson(`/contacts/default${QS.query(QS.explode({
        company
    }))}`, {
        ...opts,
        body
    });
}
exports.getContactsDefault = getContactsDefault;
function putContactsDefault(body, opts) {
    return oazapfts.fetchJson("/contacts/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putContactsDefault = putContactsDefault;
function deleteContactsDefault(opts) {
    return oazapfts.fetchJson("/contacts/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteContactsDefault = deleteContactsDefault;
function postContactsDefault(opts) {
    return oazapfts.fetchJson("/contacts/default", {
        ...opts,
        method: "POST"
    });
}
exports.postContactsDefault = postContactsDefault;
/**
 * Get contact's basic data
 */
function getContactsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contacts/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getContactsById = getContactsById;
/**
 * Delete the contact
 */
function deleteContactsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contacts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteContactsById = deleteContactsById;
function putContactsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contacts/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putContactsById = putContactsById;
function postContactsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contacts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postContactsById = postContactsById;
/**
 * Search contracts
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/contracts.csv?keywords=CTR100*
 *
 */
function getContracts(body, { keywords, resourceTypes, contractTypes, excludeResourceTypes, resourceStates, period, startDate, endDate, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/contracts${QS.query(QS.explode({
        keywords,
        resourceTypes,
        contractTypes,
        excludeResourceTypes,
        resourceStates,
        period,
        startDate,
        endDate,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getContracts = getContracts;
/**
 * Create a contract
 */
function postContracts(body, opts) {
    return oazapfts.fetchJson("/contracts", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postContracts = postContracts;
function deleteContracts(opts) {
    return oazapfts.fetchJson("/contracts", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteContracts = deleteContracts;
function putContracts(opts) {
    return oazapfts.fetchJson("/contracts", {
        ...opts,
        method: "PUT"
    });
}
exports.putContracts = putContracts;
/**
 * Get empty contract's default basic data
 */
function getContractsDefault(body, { resource, parentContract, candidate } = {}, opts) {
    return oazapfts.fetchJson(`/contracts/default${QS.query(QS.explode({
        resource,
        parentContract,
        candidate
    }))}`, {
        ...opts,
        body
    });
}
exports.getContractsDefault = getContractsDefault;
function putContractsDefault(body, opts) {
    return oazapfts.fetchJson("/contracts/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putContractsDefault = putContractsDefault;
function deleteContractsDefault(opts) {
    return oazapfts.fetchJson("/contracts/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteContractsDefault = deleteContractsDefault;
function postContractsDefault(opts) {
    return oazapfts.fetchJson("/contracts/default", {
        ...opts,
        method: "POST"
    });
}
exports.postContractsDefault = postContractsDefault;
/**
 * Get contract's basic data
 */
function getContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contracts/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getContractsById = getContractsById;
/**
 * Delete the contract
 */
function deleteContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contracts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteContractsById = deleteContractsById;
/**
 * Update basic data related to a contract
 */
function putContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contracts/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putContractsById = putContractsById;
function postContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/contracts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postContractsById = postContractsById;
/**
 * Get boondmanager contract's basic data
 */
function getBoondmanagerContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/boondmanager-contracts/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getBoondmanagerContractsById = getBoondmanagerContractsById;
/**
 * Update basic data related to a contract
 */
function putBoondmanagerContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/boondmanager-contracts/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putBoondmanagerContractsById = putBoondmanagerContractsById;
function deleteBoondmanagerContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/boondmanager-contracts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteBoondmanagerContractsById = deleteBoondmanagerContractsById;
function postBoondmanagerContractsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/boondmanager-contracts/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postBoondmanagerContractsById = postBoondmanagerContractsById;
/**
 * Get resource's dashboard
 */
function getDashboard(opts) {
    return oazapfts.fetchJson("/dashboard", {
        ...opts
    });
}
exports.getDashboard = getDashboard;
function putDashboard(body, opts) {
    return oazapfts.fetchJson("/dashboard", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putDashboard = putDashboard;
function deleteDashboard(opts) {
    return oazapfts.fetchJson("/dashboard", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteDashboard = deleteDashboard;
function postDashboard(opts) {
    return oazapfts.fetchJson("/dashboard", {
        ...opts,
        method: "POST"
    });
}
exports.postDashboard = postDashboard;
/**
 * Create a delivery
 */
function postDeliveries(body, { forceTransferCreation, contact, company, projectTypeOf, opportunityTitle, addPositioning, sendMailToDependsOnManager, sendMailToProjectManager } = {}, opts) {
    return oazapfts.fetchJson(`/deliveries${QS.query(QS.explode({
        forceTransferCreation,
        contact,
        company,
        projectTypeOf,
        opportunityTitle,
        addPositioning,
        sendMailToDependsOnManager,
        sendMailToProjectManager
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postDeliveries = postDeliveries;
function getDeliveries(opts) {
    return oazapfts.fetchJson("/deliveries", {
        ...opts
    });
}
exports.getDeliveries = getDeliveries;
function deleteDeliveries(opts) {
    return oazapfts.fetchJson("/deliveries", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteDeliveries = deleteDeliveries;
function putDeliveries(opts) {
    return oazapfts.fetchJson("/deliveries", {
        ...opts,
        method: "PUT"
    });
}
exports.putDeliveries = putDeliveries;
/**
 * Get delivery's basic data
 */
function getDeliveriesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/deliveries/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getDeliveriesById = getDeliveriesById;
/**
 * Delete the delivery
 */
function deleteDeliveriesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/deliveries/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteDeliveriesById = deleteDeliveriesById;
/**
 * Update basic data related to a delivery
 */
function putDeliveriesById(body, { contact, forceTransferCreation, company, projectTypeOf, opportunityTitle, id } = {}, opts) {
    return oazapfts.fetchJson(`/deliveries/${encodeURIComponent(id)}${QS.query(QS.explode({
        contact,
        forceTransferCreation,
        company,
        projectTypeOf,
        opportunityTitle
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putDeliveriesById = putDeliveriesById;
function postDeliveriesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/deliveries/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postDeliveriesById = postDeliveriesById;
/**
 * Search deliveries & groupments
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/deliveries-groupments.csv?keywords=MIS100*
 *
 */
function getDeliveriesGroupments(body, { keywords, projectTypes, projectStates, deliveryStates, expertiseAreas, activityAreas, transferType, sumAdditionalData, showGroupment, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/deliveries-groupments${QS.query(QS.explode({
        keywords,
        projectTypes,
        projectStates,
        deliveryStates,
        expertiseAreas,
        activityAreas,
        transferType,
        sumAdditionalData,
        showGroupment,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getDeliveriesGroupments = getDeliveriesGroupments;
function postDeliveriesGroupments(body, opts) {
    return oazapfts.fetchJson("/deliveries-groupments", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postDeliveriesGroupments = postDeliveriesGroupments;
function deleteDeliveriesGroupments(opts) {
    return oazapfts.fetchJson("/deliveries-groupments", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteDeliveriesGroupments = deleteDeliveriesGroupments;
function putDeliveriesGroupments(opts) {
    return oazapfts.fetchJson("/deliveries-groupments", {
        ...opts,
        method: "PUT"
    });
}
exports.putDeliveriesGroupments = putDeliveriesGroupments;
/**
 * Delete the device
 */
function deleteDevicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/devices/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteDevicesById = deleteDevicesById;
function getDevicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/devices/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getDevicesById = getDevicesById;
function putDevicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/devices/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putDevicesById = putDevicesById;
function postDevicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/devices/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postDevicesById = postDevicesById;
/**
 * Create a document
 */
function postDocuments(body, opts) {
    return oazapfts.fetchJson("/documents", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postDocuments = postDocuments;
function getDocuments(opts) {
    return oazapfts.fetchJson("/documents", {
        ...opts
    });
}
exports.getDocuments = getDocuments;
function deleteDocuments(opts) {
    return oazapfts.fetchJson("/documents", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteDocuments = deleteDocuments;
function putDocuments(opts) {
    return oazapfts.fetchJson("/documents", {
        ...opts,
        method: "PUT"
    });
}
exports.putDocuments = putDocuments;
/**
 * Search documents for app's viewer.
 *
 * You must have an app's viewer installed.
 *
 */
function getDocumentsViewer(body, { documents } = {}, opts) {
    return oazapfts.fetchJson(`/documents/viewer${QS.query(QS.explode({
        documents
    }))}`, {
        ...opts,
        body
    });
}
exports.getDocumentsViewer = getDocumentsViewer;
function postDocumentsViewer(body, opts) {
    return oazapfts.fetchJson("/documents/viewer", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postDocumentsViewer = postDocumentsViewer;
function deleteDocumentsViewer(opts) {
    return oazapfts.fetchJson("/documents/viewer", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteDocumentsViewer = deleteDocumentsViewer;
function putDocumentsViewer(opts) {
    return oazapfts.fetchJson("/documents/viewer", {
        ...opts,
        method: "PUT"
    });
}
exports.putDocumentsViewer = putDocumentsViewer;
/**
 * Get document content
 */
function getDocumentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/documents/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getDocumentsById = getDocumentsById;
/**
 * Update information data related to a document
 */
function putDocumentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/documents/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putDocumentsById = putDocumentsById;
/**
 * Delete the document
 */
function deleteDocumentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/documents/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteDocumentsById = deleteDocumentsById;
function postDocumentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/documents/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postDocumentsById = postDocumentsById;
/**
 * Manage download center
 *
 */
function getDownloadCenter(body, { perimeterManagers, folder } = {}, opts) {
    return oazapfts.fetchJson(`/download-center${QS.query(QS.explode({
        perimeterManagers,
        folder
    }))}`, {
        ...opts,
        body
    });
}
exports.getDownloadCenter = getDownloadCenter;
function putDownloadCenter(body, opts) {
    return oazapfts.fetchJson("/download-center", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putDownloadCenter = putDownloadCenter;
function deleteDownloadCenter(opts) {
    return oazapfts.fetchJson("/download-center", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteDownloadCenter = deleteDownloadCenter;
function postDownloadCenter(opts) {
    return oazapfts.fetchJson("/download-center", {
        ...opts,
        method: "POST"
    });
}
exports.postDownloadCenter = postDownloadCenter;
/**
 * Search download center's files
 *
 */
function getDownloadCenterByPerimeterManagerAndFolder(body, { key, customerCode, perimeterManager, folder } = {}, opts) {
    return oazapfts.fetchJson(`/download-center/${encodeURIComponent(perimeterManager)}/${encodeURIComponent(folder)}${QS.query(QS.explode({
        key,
        customerCode
    }))}`, {
        ...opts,
        body
    });
}
exports.getDownloadCenterByPerimeterManagerAndFolder = getDownloadCenterByPerimeterManagerAndFolder;
/**
 * Delete the download center's folder
 */
function deleteDownloadCenterByPerimeterManagerAndFolder(body, { perimeterManager, folder } = {}, opts) {
    return oazapfts.fetchJson(`/download-center/${encodeURIComponent(perimeterManager)}/${encodeURIComponent(folder)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteDownloadCenterByPerimeterManagerAndFolder = deleteDownloadCenterByPerimeterManagerAndFolder;
function putDownloadCenterByPerimeterManagerAndFolder(body, { perimeterManager, folder } = {}, opts) {
    return oazapfts.fetchJson(`/download-center/${encodeURIComponent(perimeterManager)}/${encodeURIComponent(folder)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putDownloadCenterByPerimeterManagerAndFolder = putDownloadCenterByPerimeterManagerAndFolder;
function postDownloadCenterByPerimeterManagerAndFolder(body, { perimeterManager, folder } = {}, opts) {
    return oazapfts.fetchJson(`/download-center/${encodeURIComponent(perimeterManager)}/${encodeURIComponent(folder)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postDownloadCenterByPerimeterManagerAndFolder = postDownloadCenterByPerimeterManagerAndFolder;
/**
 * Delete sign request
 */
function deleteSignatures(opts) {
    return oazapfts.fetchJson("/signatures", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteSignatures = deleteSignatures;
function getSignatures(opts) {
    return oazapfts.fetchJson("/signatures", {
        ...opts
    });
}
exports.getSignatures = getSignatures;
function putSignatures(body, opts) {
    return oazapfts.fetchJson("/signatures", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putSignatures = putSignatures;
function postSignatures(opts) {
    return oazapfts.fetchJson("/signatures", {
        ...opts,
        method: "POST"
    });
}
exports.postSignatures = postSignatures;
/**
 * Search expenses
 *
 * This API is accessible only if :
 * * x-JWT security scheme is used
 * * `allRights` into the payload is `true`
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/expenses.csv?keywords=TPS1*
 *
 */
function getExpenses(body, { keywords, activityType, category, resourceTypes, excludeResourceTypes, period, startDate, endDate, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/expenses${QS.query(QS.explode({
        keywords,
        activityType,
        category,
        resourceTypes,
        excludeResourceTypes,
        period,
        startDate,
        endDate,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getExpenses = getExpenses;
function postExpenses(body, opts) {
    return oazapfts.fetchJson("/expenses", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postExpenses = postExpenses;
function deleteExpenses(opts) {
    return oazapfts.fetchJson("/expenses", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteExpenses = deleteExpenses;
function putExpenses(opts) {
    return oazapfts.fetchJson("/expenses", {
        ...opts,
        method: "PUT"
    });
}
exports.putExpenses = putExpenses;
/**
 * Search expenses
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/expenses-reports.csv?keywords=EXP1*
 *
 */
function getExpensesReports(startMonth, endMonth, body, { keywords, perimeterAgenciesType, resourceTypes, validationStates, closed, encoding, extractType, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/expenses-reports${QS.query(QS.explode({
        keywords,
        perimeterAgenciesType,
        resourceTypes,
        validationStates,
        closed,
        startMonth,
        endMonth,
        encoding,
        extractType,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getExpensesReports = getExpensesReports;
/**
 * Create an expenses
 */
function postExpensesReports(body, opts) {
    return oazapfts.fetchJson("/expenses-reports", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postExpensesReports = postExpensesReports;
function deleteExpensesReports(opts) {
    return oazapfts.fetchJson("/expenses-reports", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteExpensesReports = deleteExpensesReports;
function putExpensesReports(opts) {
    return oazapfts.fetchJson("/expenses-reports", {
        ...opts,
        method: "PUT"
    });
}
exports.putExpensesReports = putExpensesReports;
/**
 * Get empty expenses default basic data
 */
function getExpensesReportsDefault(resource, term, body, { agency } = {}, opts) {
    return oazapfts.fetchJson(`/expenses-reports/default${QS.query(QS.explode({
        resource,
        term,
        agency
    }))}`, {
        ...opts,
        body
    });
}
exports.getExpensesReportsDefault = getExpensesReportsDefault;
function putExpensesReportsDefault(body, opts) {
    return oazapfts.fetchJson("/expenses-reports/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putExpensesReportsDefault = putExpensesReportsDefault;
function deleteExpensesReportsDefault(opts) {
    return oazapfts.fetchJson("/expenses-reports/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteExpensesReportsDefault = deleteExpensesReportsDefault;
function postExpensesReportsDefault(opts) {
    return oazapfts.fetchJson("/expenses-reports/default", {
        ...opts,
        method: "POST"
    });
}
exports.postExpensesReportsDefault = postExpensesReportsDefault;
/**
 * Get expenses basic data
 */
function getExpensesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/expenses-reports/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getExpensesReportsById = getExpensesReportsById;
/**
 * Delete the expenses
 */
function deleteExpensesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/expenses-reports/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteExpensesReportsById = deleteExpensesReportsById;
/**
 * Update basic data related to an expenses
 */
function putExpensesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/expenses-reports/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putExpensesReportsById = putExpensesReportsById;
function postExpensesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/expenses-reports/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postExpensesReportsById = postExpensesReportsById;
/**
 * Search flags
 */
function getFlags(body, { perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/flags${QS.query(QS.explode({
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getFlags = getFlags;
/**
 * Create a flag
 */
function postFlags(body, opts) {
    return oazapfts.fetchJson("/flags", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postFlags = postFlags;
function deleteFlags(opts) {
    return oazapfts.fetchJson("/flags", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteFlags = deleteFlags;
function putFlags(opts) {
    return oazapfts.fetchJson("/flags", {
        ...opts,
        method: "PUT"
    });
}
exports.putFlags = putFlags;
/**
 * Get flag's basic data
 */
function getFlagsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/flags/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getFlagsById = getFlagsById;
/**
 * Delete the flag
 */
function deleteFlagsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/flags/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteFlagsById = deleteFlagsById;
/**
 * Update basic data related to a flag
 */
function putFlagsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/flags/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putFlagsById = putFlagsById;
function postFlagsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/flags/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postFlagsById = postFlagsById;
/**
 * Log out user
 */
function deleteGoogleById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/google/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteGoogleById = deleteGoogleById;
function postGoogleById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/google/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postGoogleById = postGoogleById;
function putGoogleById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/google/${encodeURIComponent(id)}`, {
        ...opts,
        method: "PUT",
        body
    });
}
exports.putGoogleById = putGoogleById;
function getGoogleById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/google/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getGoogleById = getGoogleById;
/**
 * Create a groupment
 */
function postGroupments(body, opts) {
    return oazapfts.fetchJson("/groupments", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postGroupments = postGroupments;
function getGroupments(opts) {
    return oazapfts.fetchJson("/groupments", {
        ...opts
    });
}
exports.getGroupments = getGroupments;
function deleteGroupments(opts) {
    return oazapfts.fetchJson("/groupments", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteGroupments = deleteGroupments;
function putGroupments(opts) {
    return oazapfts.fetchJson("/groupments", {
        ...opts,
        method: "PUT"
    });
}
exports.putGroupments = putGroupments;
/**
 * Get empty groupment's default information data
 */
function getGroupmentsDefault(project, body, opts) {
    return oazapfts.fetchJson(`/groupments/default${QS.query(QS.explode({
        project
    }))}`, {
        ...opts,
        body
    });
}
exports.getGroupmentsDefault = getGroupmentsDefault;
function putGroupmentsDefault(body, opts) {
    return oazapfts.fetchJson("/groupments/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putGroupmentsDefault = putGroupmentsDefault;
function deleteGroupmentsDefault(opts) {
    return oazapfts.fetchJson("/groupments/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteGroupmentsDefault = deleteGroupmentsDefault;
function postGroupmentsDefault(opts) {
    return oazapfts.fetchJson("/groupments/default", {
        ...opts,
        method: "POST"
    });
}
exports.postGroupmentsDefault = postGroupmentsDefault;
/**
 * Get groupment's basic data
 */
function getGroupmentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/groupments/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getGroupmentsById = getGroupmentsById;
/**
 * Delete the groupment
 */
function deleteGroupmentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/groupments/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteGroupmentsById = deleteGroupmentsById;
/**
 * Update basic data related to a groupment
 */
function putGroupmentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/groupments/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putGroupmentsById = putGroupmentsById;
function postGroupmentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/groupments/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postGroupmentsById = postGroupmentsById;
/**
 * Create an inactivity
 */
function postInactivities(body, opts) {
    return oazapfts.fetchJson("/inactivities", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postInactivities = postInactivities;
function getInactivities(opts) {
    return oazapfts.fetchJson("/inactivities", {
        ...opts
    });
}
exports.getInactivities = getInactivities;
function deleteInactivities(opts) {
    return oazapfts.fetchJson("/inactivities", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteInactivities = deleteInactivities;
function putInactivities(opts) {
    return oazapfts.fetchJson("/inactivities", {
        ...opts,
        method: "PUT"
    });
}
exports.putInactivities = putInactivities;
/**
 * Get empty inactivity's default information data
 */
function getInactivitiesDefault(resource, body, opts) {
    return oazapfts.fetchJson(`/inactivities/default${QS.query(QS.explode({
        resource
    }))}`, {
        ...opts,
        body
    });
}
exports.getInactivitiesDefault = getInactivitiesDefault;
function putInactivitiesDefault(body, opts) {
    return oazapfts.fetchJson("/inactivities/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putInactivitiesDefault = putInactivitiesDefault;
function deleteInactivitiesDefault(opts) {
    return oazapfts.fetchJson("/inactivities/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteInactivitiesDefault = deleteInactivitiesDefault;
function postInactivitiesDefault(opts) {
    return oazapfts.fetchJson("/inactivities/default", {
        ...opts,
        method: "POST"
    });
}
exports.postInactivitiesDefault = postInactivitiesDefault;
/**
 * Get inactivity's basic data
 */
function getInactivitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/inactivities/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getInactivitiesById = getInactivitiesById;
/**
 * Delete the inactivity
 */
function deleteInactivitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/inactivities/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteInactivitiesById = deleteInactivitiesById;
/**
 * Update basic data related to an inactivity
 */
function putInactivitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/inactivities/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putInactivitiesById = putInactivitiesById;
function postInactivitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/inactivities/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postInactivitiesById = postInactivitiesById;
/**
 * Search invoices
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/invoices.csv?keywords=FACT1*
 *
 */
function getInvoices(body, { keywords, projectTypes, paymentMethods, states, closed, creditNote, period, startDate, endDate, flags, encoding, extractType, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/invoices${QS.query(QS.explode({
        keywords,
        projectTypes,
        paymentMethods,
        states,
        closed,
        creditNote,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        extractType,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getInvoices = getInvoices;
/**
 * Create an invoice
 */
function postInvoices(body, opts) {
    return oazapfts.fetchJson("/invoices", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postInvoices = postInvoices;
function deleteInvoices(opts) {
    return oazapfts.fetchJson("/invoices", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteInvoices = deleteInvoices;
function putInvoices(opts) {
    return oazapfts.fetchJson("/invoices", {
        ...opts,
        method: "PUT"
    });
}
exports.putInvoices = putInvoices;
/**
 * Get empty invoice's default information data
 */
function getInvoicesDefault(order, body, { isCreditNote, schedule, term, autoFillItemsWithTimesExpensesPurchases } = {}, opts) {
    return oazapfts.fetchJson(`/invoices/default${QS.query(QS.explode({
        order,
        isCreditNote,
        schedule,
        term,
        autoFillItemsWithTimesExpensesPurchases
    }))}`, {
        ...opts,
        body
    });
}
exports.getInvoicesDefault = getInvoicesDefault;
function putInvoicesDefault(body, opts) {
    return oazapfts.fetchJson("/invoices/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putInvoicesDefault = putInvoicesDefault;
function deleteInvoicesDefault(opts) {
    return oazapfts.fetchJson("/invoices/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteInvoicesDefault = deleteInvoicesDefault;
function postInvoicesDefault(opts) {
    return oazapfts.fetchJson("/invoices/default", {
        ...opts,
        method: "POST"
    });
}
exports.postInvoicesDefault = postInvoicesDefault;
/**
 * Get invoice's basic data
 */
function getInvoicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/invoices/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getInvoicesById = getInvoicesById;
/**
 * Delete the invoice
 */
function deleteInvoicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/invoices/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteInvoicesById = deleteInvoicesById;
function putInvoicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/invoices/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putInvoicesById = putInvoicesById;
function postInvoicesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/invoices/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postInvoicesById = postInvoicesById;
/**
 * Search logs entity (Resource, Candidate, Project, Opportunity, Order, Invoice, Contact)
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/logs.csv?keywords=COMP100*
 *
 */
function getLogs(body, { keywords, logTypes, logActions, logAuths, period, startDate, endDate, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/logs${QS.query(QS.explode({
        keywords,
        logTypes,
        logActions,
        logAuths,
        period,
        startDate,
        endDate,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getLogs = getLogs;
function postLogs(body, opts) {
    return oazapfts.fetchJson("/logs", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postLogs = postLogs;
function deleteLogs(opts) {
    return oazapfts.fetchJson("/logs", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteLogs = deleteLogs;
function putLogs(opts) {
    return oazapfts.fetchJson("/logs", {
        ...opts,
        method: "PUT"
    });
}
exports.putLogs = putLogs;
/**
 * Get log's basic data
 */
function getLogsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/logs/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getLogsById = getLogsById;
function putLogsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/logs/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putLogsById = putLogsById;
function deleteLogsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/logs/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteLogsById = deleteLogsById;
function postLogsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/logs/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postLogsById = postLogsById;
/**
 * Search marketplace's apps
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/invoices.csv?keywords=FACT1*
 *
 */
function getMarketplace(body, { keywords, categories, onlyMyApps, validations, visibilities, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace${QS.query(QS.explode({
        keywords,
        categories,
        onlyMyApps,
        validations,
        visibilities,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getMarketplace = getMarketplace;
/**
 * Create a marketplace's apps
 */
function postMarketplace(body, opts) {
    return oazapfts.fetchJson("/marketplace", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postMarketplace = postMarketplace;
function deleteMarketplace(opts) {
    return oazapfts.fetchJson("/marketplace", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteMarketplace = deleteMarketplace;
function putMarketplace(opts) {
    return oazapfts.fetchJson("/marketplace", {
        ...opts,
        method: "PUT"
    });
}
exports.putMarketplace = putMarketplace;
/**
 * Get empty marketplace's App default information data
 */
function getMarketplaceDefault(opts) {
    return oazapfts.fetchJson("/marketplace/default", {
        ...opts
    });
}
exports.getMarketplaceDefault = getMarketplaceDefault;
function putMarketplaceDefault(body, opts) {
    return oazapfts.fetchJson("/marketplace/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putMarketplaceDefault = putMarketplaceDefault;
function deleteMarketplaceDefault(opts) {
    return oazapfts.fetchJson("/marketplace/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteMarketplaceDefault = deleteMarketplaceDefault;
function postMarketplaceDefault(opts) {
    return oazapfts.fetchJson("/marketplace/default", {
        ...opts,
        method: "POST"
    });
}
exports.postMarketplaceDefault = postMarketplaceDefault;
/**
 * Get marketplace's App basic data
 */
function getMarketplaceById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getMarketplaceById = getMarketplaceById;
/**
 * Delete a marketplace's App
 */
function deleteMarketplaceById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteMarketplaceById = deleteMarketplaceById;
/**
 * Update basic data related to a marketplace's App
 */
function putMarketplaceById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putMarketplaceById = putMarketplaceById;
function postMarketplaceById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postMarketplaceById = postMarketplaceById;
/**
 * Get marketplace's App access
 */
function getMarketplaceByIdConfigure(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}/configure`, {
        ...opts,
        body
    });
}
exports.getMarketplaceByIdConfigure = getMarketplaceByIdConfigure;
/**
 * Update marketplace's App access
 */
function putMarketplaceByIdConfigure(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}/configure`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putMarketplaceByIdConfigure = putMarketplaceByIdConfigure;
function deleteMarketplaceByIdConfigure(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}/configure`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteMarketplaceByIdConfigure = deleteMarketplaceByIdConfigure;
function postMarketplaceByIdConfigure(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(id)}/configure`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postMarketplaceByIdConfigure = postMarketplaceByIdConfigure;
/**
 * Get marketplace's App access
 */
function getMarketplaceByAppCodeConfigure(appCode, body, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(appCode)}/configure`, {
        ...opts,
        body
    });
}
exports.getMarketplaceByAppCodeConfigure = getMarketplaceByAppCodeConfigure;
/**
 * Update marketplace's App access
 */
function putMarketplaceByAppCodeConfigure(appCode, body, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(appCode)}/configure`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putMarketplaceByAppCodeConfigure = putMarketplaceByAppCodeConfigure;
function deleteMarketplaceByAppCodeConfigure(appCode, body, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(appCode)}/configure`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteMarketplaceByAppCodeConfigure = deleteMarketplaceByAppCodeConfigure;
function postMarketplaceByAppCodeConfigure(appCode, body, opts) {
    return oazapfts.fetchJson(`/marketplace/${encodeURIComponent(appCode)}/configure`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postMarketplaceByAppCodeConfigure = postMarketplaceByAppCodeConfigure;
/**
 * Refresh App token
 */
function postMarketplaceRefreshToken(opts) {
    return oazapfts.fetchJson("/marketplace/refresh-token", {
        ...opts,
        method: "POST"
    });
}
exports.postMarketplaceRefreshToken = postMarketplaceRefreshToken;
function deleteMarketplaceRefreshToken(opts) {
    return oazapfts.fetchJson("/marketplace/refresh-token", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteMarketplaceRefreshToken = deleteMarketplaceRefreshToken;
function putMarketplaceRefreshToken(opts) {
    return oazapfts.fetchJson("/marketplace/refresh-token", {
        ...opts,
        method: "PUT"
    });
}
exports.putMarketplaceRefreshToken = putMarketplaceRefreshToken;
function getMarketplaceRefreshToken(opts) {
    return oazapfts.fetchJson("/marketplace/refresh-token", {
        ...opts
    });
}
exports.getMarketplaceRefreshToken = getMarketplaceRefreshToken;
/**
 * Log out user
 */
function deleteMicrosoftById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/microsoft/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteMicrosoftById = deleteMicrosoftById;
function postMicrosoftById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/microsoft/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postMicrosoftById = postMicrosoftById;
function putMicrosoftById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/microsoft/${encodeURIComponent(id)}`, {
        ...opts,
        method: "PUT",
        body
    });
}
exports.putMicrosoftById = putMicrosoftById;
function getMicrosoftById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/microsoft/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getMicrosoftById = getMicrosoftById;
/**
 * Search opportunities
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/opportunities.csv?keywords=AO100*
 *
 */
function getOpportunities(body, { keywords, returnMoreData, perimeterManagersType, positioningStates, period, startDate, endDate, opportunityStates, opportunityTypes, expertiseAreas, activityAreas, tools, places, durations, origins, flags, onlyVisible, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/opportunities${QS.query(QS.explode({
        keywords,
        returnMoreData,
        perimeterManagersType,
        positioningStates,
        period,
        startDate,
        endDate,
        opportunityStates,
        opportunityTypes,
        expertiseAreas,
        activityAreas,
        tools,
        places,
        durations,
        origins,
        flags,
        onlyVisible,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getOpportunities = getOpportunities;
/**
 * Create an opportunity
 */
function postOpportunities(body, opts) {
    return oazapfts.fetchJson("/opportunities", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postOpportunities = postOpportunities;
function deleteOpportunities(opts) {
    return oazapfts.fetchJson("/opportunities", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteOpportunities = deleteOpportunities;
function putOpportunities(opts) {
    return oazapfts.fetchJson("/opportunities", {
        ...opts,
        method: "PUT"
    });
}
exports.putOpportunities = putOpportunities;
/**
 * Get empty opportunity's default information data
 */
function getOpportunitiesDefault(body, { contact, company, typeOf } = {}, opts) {
    return oazapfts.fetchJson(`/opportunities/default${QS.query(QS.explode({
        contact,
        company,
        typeOf
    }))}`, {
        ...opts,
        body
    });
}
exports.getOpportunitiesDefault = getOpportunitiesDefault;
function putOpportunitiesDefault(body, opts) {
    return oazapfts.fetchJson("/opportunities/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putOpportunitiesDefault = putOpportunitiesDefault;
function deleteOpportunitiesDefault(opts) {
    return oazapfts.fetchJson("/opportunities/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteOpportunitiesDefault = deleteOpportunitiesDefault;
function postOpportunitiesDefault(opts) {
    return oazapfts.fetchJson("/opportunities/default", {
        ...opts,
        method: "POST"
    });
}
exports.postOpportunitiesDefault = postOpportunitiesDefault;
/**
 * Get opportunity's basic data
 */
function getOpportunitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/opportunities/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getOpportunitiesById = getOpportunitiesById;
/**
 * Delete the opportunity
 */
function deleteOpportunitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/opportunities/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteOpportunitiesById = deleteOpportunitiesById;
function putOpportunitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/opportunities/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putOpportunitiesById = putOpportunitiesById;
function postOpportunitiesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/opportunities/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postOpportunitiesById = postOpportunitiesById;
/**
 * Search orders
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/orders.csv?keywords=BDC1*
 *
 */
function getOrders(body, { keywords, projectTypes, paymentMethods, states, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/orders${QS.query(QS.explode({
        keywords,
        projectTypes,
        paymentMethods,
        states,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getOrders = getOrders;
/**
 * Create an order
 */
function postOrders(body, opts) {
    return oazapfts.fetchJson("/orders", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postOrders = postOrders;
function deleteOrders(opts) {
    return oazapfts.fetchJson("/orders", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteOrders = deleteOrders;
function putOrders(opts) {
    return oazapfts.fetchJson("/orders", {
        ...opts,
        method: "PUT"
    });
}
exports.putOrders = putOrders;
/**
 * Get empty order's default information data
 */
function getOrdersDefault(project, body, { deliveries, purchases } = {}, opts) {
    return oazapfts.fetchJson(`/orders/default${QS.query(QS.explode({
        project,
        deliveries,
        purchases
    }))}`, {
        ...opts,
        body
    });
}
exports.getOrdersDefault = getOrdersDefault;
function putOrdersDefault(body, opts) {
    return oazapfts.fetchJson("/orders/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putOrdersDefault = putOrdersDefault;
function deleteOrdersDefault(opts) {
    return oazapfts.fetchJson("/orders/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteOrdersDefault = deleteOrdersDefault;
function postOrdersDefault(opts) {
    return oazapfts.fetchJson("/orders/default", {
        ...opts,
        method: "POST"
    });
}
exports.postOrdersDefault = postOrdersDefault;
/**
 * Get order's basic data
 */
function getOrdersById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/orders/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getOrdersById = getOrdersById;
/**
 * Delete the order
 */
function deleteOrdersById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/orders/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteOrdersById = deleteOrdersById;
function putOrdersById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/orders/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putOrdersById = putOrdersById;
function postOrdersById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/orders/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postOrdersById = postOrdersById;
/**
 * Search payments
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/payments.csv?keywords=ACH1*
 *
 */
function getPayments(body, { keywords, subscriptionTypes, purchaseTypes, paymentStates, paymentMethods, period, startDate, endDate, flags, encoding, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/payments${QS.query(QS.explode({
        keywords,
        subscriptionTypes,
        purchaseTypes,
        paymentStates,
        paymentMethods,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getPayments = getPayments;
/**
 * Create a payment
 */
function postPayments(body, opts) {
    return oazapfts.fetchJson("/payments", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postPayments = postPayments;
function deletePayments(opts) {
    return oazapfts.fetchJson("/payments", {
        ...opts,
        method: "DELETE"
    });
}
exports.deletePayments = deletePayments;
function putPayments(opts) {
    return oazapfts.fetchJson("/payments", {
        ...opts,
        method: "PUT"
    });
}
exports.putPayments = putPayments;
/**
 * Get empty payment's default basic data
 */
function getPaymentsDefault(purchase, body, { term } = {}, opts) {
    return oazapfts.fetchJson(`/payments/default${QS.query(QS.explode({
        purchase,
        term
    }))}`, {
        ...opts,
        body
    });
}
exports.getPaymentsDefault = getPaymentsDefault;
function putPaymentsDefault(body, opts) {
    return oazapfts.fetchJson("/payments/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putPaymentsDefault = putPaymentsDefault;
function deletePaymentsDefault(opts) {
    return oazapfts.fetchJson("/payments/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deletePaymentsDefault = deletePaymentsDefault;
function postPaymentsDefault(opts) {
    return oazapfts.fetchJson("/payments/default", {
        ...opts,
        method: "POST"
    });
}
exports.postPaymentsDefault = postPaymentsDefault;
/**
 * Get payment's basic data
 */
function getPaymentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/payments/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getPaymentsById = getPaymentsById;
/**
 * Delete the payment
 */
function deletePaymentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/payments/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deletePaymentsById = deletePaymentsById;
/**
 * Update basic data related to a payment
 */
function putPaymentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/payments/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putPaymentsById = putPaymentsById;
function postPaymentsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/payments/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postPaymentsById = postPaymentsById;
/**
 * Search poles
 */
function getPoles(opts) {
    return oazapfts.fetchJson("/poles", {
        ...opts
    });
}
exports.getPoles = getPoles;
/**
 * Create a pole
 */
function postPoles(body, opts) {
    return oazapfts.fetchJson("/poles", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postPoles = postPoles;
function deletePoles(opts) {
    return oazapfts.fetchJson("/poles", {
        ...opts,
        method: "DELETE"
    });
}
exports.deletePoles = deletePoles;
function putPoles(opts) {
    return oazapfts.fetchJson("/poles", {
        ...opts,
        method: "PUT"
    });
}
exports.putPoles = putPoles;
/**
 * Get pole's basic data
 */
function getPolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/poles/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getPolesById = getPolesById;
/**
 * Delete the pole
 */
function deletePolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/poles/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deletePolesById = deletePolesById;
/**
 * Update basic data related to a pole
 */
function putPolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/poles/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putPolesById = putPolesById;
function postPolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/poles/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postPolesById = postPolesById;
/**
 * Search positionings
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/positionings.csv?keywords=POS100*
 *
 */
function getPositionings(body, { keywords, perimeterManagersType, positioningType, entityTypes, opportunityTypes, positioningStates, opportunityStates, returnMoreData, period, startDate, endDate, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/positionings${QS.query(QS.explode({
        keywords,
        perimeterManagersType,
        positioningType,
        entityTypes,
        opportunityTypes,
        positioningStates,
        opportunityStates,
        returnMoreData,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getPositionings = getPositionings;
/**
 * Create a positioning.
 *
 * If state is `won` it will attach this positioning to a new project or an existing one.
 *
 */
function postPositionings(body, { sendMailToDependsOnManager, sendMailToOpportunityManager } = {}, opts) {
    return oazapfts.fetchJson(`/positionings${QS.query(QS.explode({
        sendMailToDependsOnManager,
        sendMailToOpportunityManager
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postPositionings = postPositionings;
function deletePositionings(opts) {
    return oazapfts.fetchJson("/positionings", {
        ...opts,
        method: "DELETE"
    });
}
exports.deletePositionings = deletePositionings;
function putPositionings(opts) {
    return oazapfts.fetchJson("/positionings", {
        ...opts,
        method: "PUT"
    });
}
exports.putPositionings = putPositionings;
/**
 * Get positioning's basic data
 */
function getPositioningsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/positionings/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getPositioningsById = getPositioningsById;
/**
 * Delete the positioning
 */
function deletePositioningsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/positionings/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deletePositioningsById = deletePositioningsById;
/**
 * Update basic data related to a positioning.
 *
 * If state is `won` it will attach this positioning to a new project or an existing one.
 *
 */
function putPositioningsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/positionings/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putPositioningsById = putPositioningsById;
function postPositioningsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/positionings/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postPositioningsById = postPositioningsById;
/**
 * Search products
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/products.csv?keywords=PROD100*
 *
 */
function getProducts(body, { keywords, productStates, productTypes, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/products${QS.query(QS.explode({
        keywords,
        productStates,
        productTypes,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getProducts = getProducts;
/**
 * Create a product
 */
function postProducts(body, opts) {
    return oazapfts.fetchJson("/products", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postProducts = postProducts;
function deleteProducts(opts) {
    return oazapfts.fetchJson("/products", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteProducts = deleteProducts;
function putProducts(opts) {
    return oazapfts.fetchJson("/products", {
        ...opts,
        method: "PUT"
    });
}
exports.putProducts = putProducts;
/**
 * Get empty product's default information data
 */
function getProductsDefault(opts) {
    return oazapfts.fetchJson("/products/default", {
        ...opts
    });
}
exports.getProductsDefault = getProductsDefault;
function putProductsDefault(body, opts) {
    return oazapfts.fetchJson("/products/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putProductsDefault = putProductsDefault;
function deleteProductsDefault(opts) {
    return oazapfts.fetchJson("/products/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteProductsDefault = deleteProductsDefault;
function postProductsDefault(opts) {
    return oazapfts.fetchJson("/products/default", {
        ...opts,
        method: "POST"
    });
}
exports.postProductsDefault = postProductsDefault;
/**
 * Get product's basic data
 */
function getProductsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/products/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getProductsById = getProductsById;
/**
 * Delete the product
 */
function deleteProductsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/products/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteProductsById = deleteProductsById;
function putProductsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/products/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putProductsById = putProductsById;
function postProductsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/products/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postProductsById = postProductsById;
/**
 * Search projects
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/projects.csv?keywords=PRJ100*
 *
 */
function getProjects(body, { keywords, projectTypes, projectStates, period, startDate, endDate, expertiseAreas, activityAreas, flags, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/projects${QS.query(QS.explode({
        keywords,
        projectTypes,
        projectStates,
        period,
        startDate,
        endDate,
        expertiseAreas,
        activityAreas,
        flags,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getProjects = getProjects;
/**
 * Create a project which mode is only 'product' or `fixed'
 */
function postProjects(body, opts) {
    return oazapfts.fetchJson("/projects", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postProjects = postProjects;
function deleteProjects(opts) {
    return oazapfts.fetchJson("/projects", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteProjects = deleteProjects;
function putProjects(opts) {
    return oazapfts.fetchJson("/projects", {
        ...opts,
        method: "PUT"
    });
}
exports.putProjects = putProjects;
/**
 * Get project's basic data
 */
function getProjectsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/projects/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getProjectsById = getProjectsById;
/**
 * Delete the project
 */
function deleteProjectsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/projects/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteProjectsById = deleteProjectsById;
function putProjectsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/projects/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putProjectsById = putProjectsById;
function postProjectsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/projects/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postProjectsById = postProjectsById;
/**
 * Search purchases
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/purchases.csv?keywords=ACH1*
 *
 */
function getPurchases(body, { keywords, subscriptionTypes, purchaseStates, purchaseTypes, paymentMethods, period, startDate, endDate, flags, encoding, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/purchases${QS.query(QS.explode({
        keywords,
        subscriptionTypes,
        purchaseStates,
        purchaseTypes,
        paymentMethods,
        period,
        startDate,
        endDate,
        flags,
        encoding,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getPurchases = getPurchases;
/**
 * Create a purchase
 */
function postPurchases(body, opts) {
    return oazapfts.fetchJson("/purchases", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postPurchases = postPurchases;
function deletePurchases(opts) {
    return oazapfts.fetchJson("/purchases", {
        ...opts,
        method: "DELETE"
    });
}
exports.deletePurchases = deletePurchases;
function putPurchases(opts) {
    return oazapfts.fetchJson("/purchases", {
        ...opts,
        method: "PUT"
    });
}
exports.putPurchases = putPurchases;
/**
 * Get empty purchase's default information data
 */
function getPurchasesDefault(body, { project, delivery, additionalTurnoverAndCosts, contact, company } = {}, opts) {
    return oazapfts.fetchJson(`/purchases/default${QS.query(QS.explode({
        project,
        delivery,
        additionalTurnoverAndCosts,
        contact,
        company
    }))}`, {
        ...opts,
        body
    });
}
exports.getPurchasesDefault = getPurchasesDefault;
function putPurchasesDefault(body, opts) {
    return oazapfts.fetchJson("/purchases/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putPurchasesDefault = putPurchasesDefault;
function deletePurchasesDefault(opts) {
    return oazapfts.fetchJson("/purchases/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deletePurchasesDefault = deletePurchasesDefault;
function postPurchasesDefault(opts) {
    return oazapfts.fetchJson("/purchases/default", {
        ...opts,
        method: "POST"
    });
}
exports.postPurchasesDefault = postPurchasesDefault;
/**
 * Get purchase's basic data
 */
function getPurchasesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/purchases/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getPurchasesById = getPurchasesById;
/**
 * Delete the purchase
 */
function deletePurchasesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/purchases/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deletePurchasesById = deletePurchasesById;
function putPurchasesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/purchases/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putPurchasesById = putPurchasesById;
function postPurchasesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/purchases/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postPurchasesById = postPurchasesById;
/**
 * Search production plans reporting
 */
function getReportingProductionPlans(startDate, endDate, body, { keywords, resourceTypes, resourceStates, positioningStates, positioningPeriod, showContracts, projects, contacts, companies, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/reporting-production-plans${QS.query(QS.explode({
        keywords,
        resourceTypes,
        resourceStates,
        positioningStates,
        positioningPeriod,
        startDate,
        endDate,
        showContracts,
        projects,
        contacts,
        companies,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getReportingProductionPlans = getReportingProductionPlans;
function postReportingProductionPlans(body, opts) {
    return oazapfts.fetchJson("/reporting-production-plans", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postReportingProductionPlans = postReportingProductionPlans;
function deleteReportingProductionPlans(opts) {
    return oazapfts.fetchJson("/reporting-production-plans", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteReportingProductionPlans = deleteReportingProductionPlans;
function putReportingProductionPlans(opts) {
    return oazapfts.fetchJson("/reporting-production-plans", {
        ...opts,
        method: "PUT"
    });
}
exports.putReportingProductionPlans = putReportingProductionPlans;
/**
 * Search synthesis reporting
 */
function getReportingSynthesis(startDate, body, { reportingType, reportingCategory, period, endDate, resources, projects, contacts, companies, scorecards, useCache, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter } = {}, opts) {
    return oazapfts.fetchJson(`/reporting-synthesis${QS.query(QS.explode({
        reportingType,
        reportingCategory,
        period,
        startDate,
        endDate,
        resources,
        projects,
        contacts,
        companies,
        scorecards,
        useCache,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter
    }))}`, {
        ...opts,
        body
    });
}
exports.getReportingSynthesis = getReportingSynthesis;
function postReportingSynthesis(body, opts) {
    return oazapfts.fetchJson("/reporting-synthesis", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postReportingSynthesis = postReportingSynthesis;
function deleteReportingSynthesis(opts) {
    return oazapfts.fetchJson("/reporting-synthesis", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteReportingSynthesis = deleteReportingSynthesis;
function putReportingSynthesis(opts) {
    return oazapfts.fetchJson("/reporting-synthesis", {
        ...opts,
        method: "PUT"
    });
}
exports.putReportingSynthesis = putReportingSynthesis;
/**
 * Search companies reporting
 */
function getReportingCompanies(startDate, endDate, body, { companiesStates, maxCompanies, showPercentage, companies, scorecards, useCache, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/reporting-companies${QS.query(QS.explode({
        companiesStates,
        maxCompanies,
        showPercentage,
        startDate,
        endDate,
        companies,
        scorecards,
        useCache,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getReportingCompanies = getReportingCompanies;
function postReportingCompanies(body, opts) {
    return oazapfts.fetchJson("/reporting-companies", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postReportingCompanies = postReportingCompanies;
function deleteReportingCompanies(opts) {
    return oazapfts.fetchJson("/reporting-companies", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteReportingCompanies = deleteReportingCompanies;
function putReportingCompanies(opts) {
    return oazapfts.fetchJson("/reporting-companies", {
        ...opts,
        method: "PUT"
    });
}
exports.putReportingCompanies = putReportingCompanies;
/**
 * Search projects reporting
 */
function getReportingProjects(body, { projectTypes, projectStates, maxProjects, startDate, endDate, resources, projects, contacts, companies, scorecards, useCache, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/reporting-projects${QS.query(QS.explode({
        projectTypes,
        projectStates,
        maxProjects,
        startDate,
        endDate,
        resources,
        projects,
        contacts,
        companies,
        scorecards,
        useCache,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getReportingProjects = getReportingProjects;
function postReportingProjects(body, opts) {
    return oazapfts.fetchJson("/reporting-projects", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postReportingProjects = postReportingProjects;
function deleteReportingProjects(opts) {
    return oazapfts.fetchJson("/reporting-projects", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteReportingProjects = deleteReportingProjects;
function putReportingProjects(opts) {
    return oazapfts.fetchJson("/reporting-projects", {
        ...opts,
        method: "PUT"
    });
}
exports.putReportingProjects = putReportingProjects;
/**
 * Search resources reporting
 */
function getReportingResources(body, { reportingCategory, maxResources, resourceTypes, resourceStates, period, startDate, endDate, resources, projects, contacts, companies, scorecards, useCache, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/reporting-resources${QS.query(QS.explode({
        reportingCategory,
        maxResources,
        resourceTypes,
        resourceStates,
        period,
        startDate,
        endDate,
        resources,
        projects,
        contacts,
        companies,
        scorecards,
        useCache,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getReportingResources = getReportingResources;
function postReportingResources(body, opts) {
    return oazapfts.fetchJson("/reporting-resources", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postReportingResources = postReportingResources;
function deleteReportingResources(opts) {
    return oazapfts.fetchJson("/reporting-resources", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteReportingResources = deleteReportingResources;
function putReportingResources(opts) {
    return oazapfts.fetchJson("/reporting-resources", {
        ...opts,
        method: "PUT"
    });
}
exports.putReportingResources = putReportingResources;
/**
 * Search resources
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/resources.csv?keywords=COMP100*
 *
 */
function getResources(body, { keywords, keywordsType, returnMoreData, excludeResourceTypes, resourceTypes, activityAreas, expertiseAreas, tools, mobilityAreas, experiences, trainings, period, startDate, endDate, flags, resourceStates, excludeManager, languages, onlyVisible, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/resources${QS.query(QS.explode({
        keywords,
        keywordsType,
        returnMoreData,
        excludeResourceTypes,
        resourceTypes,
        activityAreas,
        expertiseAreas,
        tools,
        mobilityAreas,
        experiences,
        trainings,
        period,
        startDate,
        endDate,
        flags,
        resourceStates,
        excludeManager,
        languages,
        onlyVisible,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getResources = getResources;
/**
 * Create a resource
 */
function postResources(body, opts) {
    return oazapfts.fetchJson("/resources", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postResources = postResources;
function deleteResources(opts) {
    return oazapfts.fetchJson("/resources", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteResources = deleteResources;
function putResources(opts) {
    return oazapfts.fetchJson("/resources", {
        ...opts,
        method: "PUT"
    });
}
exports.putResources = putResources;
/**
 * Get empty resource's default information data
 */
function getResourcesDefault(opts) {
    return oazapfts.fetchJson("/resources/default", {
        ...opts
    });
}
exports.getResourcesDefault = getResourcesDefault;
function putResourcesDefault(body, opts) {
    return oazapfts.fetchJson("/resources/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putResourcesDefault = putResourcesDefault;
function deleteResourcesDefault(opts) {
    return oazapfts.fetchJson("/resources/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteResourcesDefault = deleteResourcesDefault;
function postResourcesDefault(opts) {
    return oazapfts.fetchJson("/resources/default", {
        ...opts,
        method: "POST"
    });
}
exports.postResourcesDefault = postResourcesDefault;
/**
 * Get resource's basic data
 */
function getResourcesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/resources/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getResourcesById = getResourcesById;
/**
 * Delete the resource
 */
function deleteResourcesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/resources/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteResourcesById = deleteResourcesById;
function putResourcesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/resources/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putResourcesById = putResourcesById;
function postResourcesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/resources/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postResourcesById = postResourcesById;
/**
 * Search roles
 */
function getRoles(body, { keywords, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/roles${QS.query(QS.explode({
        keywords,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getRoles = getRoles;
/**
 * Create a role
 */
function postRoles(body, opts) {
    return oazapfts.fetchJson("/roles", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postRoles = postRoles;
function deleteRoles(opts) {
    return oazapfts.fetchJson("/roles", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteRoles = deleteRoles;
function putRoles(opts) {
    return oazapfts.fetchJson("/roles", {
        ...opts,
        method: "PUT"
    });
}
exports.putRoles = putRoles;
/**
 * Get role's basic data
 */
function getRolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/roles/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getRolesById = getRolesById;
/**
 * Delete the role
 */
function deleteRolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/roles/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteRolesById = deleteRolesById;
/**
 * Update basic data related to a role
 */
function putRolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/roles/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putRolesById = putRolesById;
function postRolesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/roles/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postRolesById = postRolesById;
/**
 * Search user's saved search
 */
function getSavedsearches(body, { keywords, owner, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/savedsearches${QS.query(QS.explode({
        keywords,
        owner,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getSavedsearches = getSavedsearches;
/**
 * Create a saved search
 */
function postSavedsearches(body, opts) {
    return oazapfts.fetchJson("/savedsearches", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postSavedsearches = postSavedsearches;
function deleteSavedsearches(opts) {
    return oazapfts.fetchJson("/savedsearches", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteSavedsearches = deleteSavedsearches;
function putSavedsearches(opts) {
    return oazapfts.fetchJson("/savedsearches", {
        ...opts,
        method: "PUT"
    });
}
exports.putSavedsearches = putSavedsearches;
/**
 * Get saved search's basic data
 */
function getSavedsearchesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/savedsearches/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getSavedsearchesById = getSavedsearchesById;
/**
 * Delete the saved search
 */
function deleteSavedsearchesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/savedsearches/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteSavedsearchesById = deleteSavedsearchesById;
/**
 * Update basic data related to a saved search
 */
function putSavedsearchesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/savedsearches/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putSavedsearchesById = putSavedsearchesById;
function postSavedsearchesById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/savedsearches/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postSavedsearchesById = postSavedsearchesById;
/**
 * Create a sandbox
 */
function postSandbox(opts) {
    return oazapfts.fetchJson("/sandbox", {
        ...opts,
        method: "POST"
    });
}
exports.postSandbox = postSandbox;
function deleteSandbox(opts) {
    return oazapfts.fetchJson("/sandbox", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteSandbox = deleteSandbox;
function putSandbox(opts) {
    return oazapfts.fetchJson("/sandbox", {
        ...opts,
        method: "PUT"
    });
}
exports.putSandbox = putSandbox;
function getSandbox(opts) {
    return oazapfts.fetchJson("/sandbox", {
        ...opts
    });
}
exports.getSandbox = getSandbox;
/**
 * Share a profile
 */
function postShare(body, opts) {
    return oazapfts.fetchJson("/share", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postShare = postShare;
function getShare(opts) {
    return oazapfts.fetchJson("/share", {
        ...opts
    });
}
exports.getShare = getShare;
function deleteShare(opts) {
    return oazapfts.fetchJson("/share", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteShare = deleteShare;
function putShare(opts) {
    return oazapfts.fetchJson("/share", {
        ...opts,
        method: "PUT"
    });
}
exports.putShare = putShare;
/**
 * Get empty share's profile default basic data
 */
function getShareDefault(body, { resource, candidate, opportunity, project, product, purchase, order, invoice, contact, company, timesReport, expensesReport, absencesReport, payment, action, delivery, inactivity, groupment, positioning, contract, advantage, settings } = {}, opts) {
    return oazapfts.fetchJson(`/share/default${QS.query(QS.explode({
        resource,
        candidate,
        opportunity,
        project,
        product,
        purchase,
        order,
        invoice,
        contact,
        company,
        timesReport,
        expensesReport,
        absencesReport,
        payment,
        action,
        delivery,
        inactivity,
        groupment,
        positioning,
        contract,
        advantage,
        settings
    }))}`, {
        ...opts,
        body
    });
}
exports.getShareDefault = getShareDefault;
function putShareDefault(body, opts) {
    return oazapfts.fetchJson("/share/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putShareDefault = putShareDefault;
function deleteShareDefault(opts) {
    return oazapfts.fetchJson("/share/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteShareDefault = deleteShareDefault;
function postShareDefault(opts) {
    return oazapfts.fetchJson("/share/default", {
        ...opts,
        method: "POST"
    });
}
exports.postShareDefault = postShareDefault;
/**
 * Get subscription's basic data
 */
function getSubscription(opts) {
    return oazapfts.fetchJson("/subscription", {
        ...opts
    });
}
exports.getSubscription = getSubscription;
/**
 * Update basic data related to a subscription
 */
function putSubscription(body, opts) {
    return oazapfts.fetchJson("/subscription", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putSubscription = putSubscription;
function deleteSubscription(opts) {
    return oazapfts.fetchJson("/subscription", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteSubscription = deleteSubscription;
function postSubscription(opts) {
    return oazapfts.fetchJson("/subscription", {
        ...opts,
        method: "POST"
    });
}
exports.postSubscription = postSubscription;
/**
 * Search invoices
 *
 */
function getSubscriptionInvoices(body, { page, maxResults } = {}, opts) {
    return oazapfts.fetchJson(`/subscription/invoices${QS.query(QS.explode({
        page,
        maxResults
    }))}`, {
        ...opts,
        body
    });
}
exports.getSubscriptionInvoices = getSubscriptionInvoices;
function postSubscriptionInvoices(body, opts) {
    return oazapfts.fetchJson("/subscription/invoices", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postSubscriptionInvoices = postSubscriptionInvoices;
function deleteSubscriptionInvoices(opts) {
    return oazapfts.fetchJson("/subscription/invoices", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteSubscriptionInvoices = deleteSubscriptionInvoices;
function putSubscriptionInvoices(opts) {
    return oazapfts.fetchJson("/subscription/invoices", {
        ...opts,
        method: "PUT"
    });
}
exports.putSubscriptionInvoices = putSubscriptionInvoices;
/**
 * Create a target
 */
function postTargets(body, opts) {
    return oazapfts.fetchJson("/targets", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postTargets = postTargets;
function getTargets(opts) {
    return oazapfts.fetchJson("/targets", {
        ...opts
    });
}
exports.getTargets = getTargets;
function deleteTargets(opts) {
    return oazapfts.fetchJson("/targets", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteTargets = deleteTargets;
function putTargets(opts) {
    return oazapfts.fetchJson("/targets", {
        ...opts,
        method: "PUT"
    });
}
exports.putTargets = putTargets;
/**
 * Get target's basic data
 */
function getTargetsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/targets/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getTargetsById = getTargetsById;
/**
 * Delete the target
 */
function deleteTargetsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/targets/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteTargetsById = deleteTargetsById;
/**
 * Update basic data related to a target
 */
function putTargetsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/targets/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putTargetsById = putTargetsById;
function postTargetsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/targets/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postTargetsById = postTargetsById;
/**
 * Update data related to a Task.
 */
function putTasksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/tasks/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putTasksById = putTasksById;
function getTasksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/tasks/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getTasksById = getTasksById;
function deleteTasksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/tasks/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteTasksById = deleteTasksById;
function postTasksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/tasks/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postTasksById = postTasksById;
/**
 * Search times
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/times.csv?keywords=TPS1 TPSEXP2*
 *
 */
function getTimes(body, { keywords, activityType, workUnitTypes, category, resourceTypes, excludeResourceTypes, returnDetailedExceptionalTimes, period, startDate, endDate, encoding, extractType, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/times${QS.query(QS.explode({
        keywords,
        activityType,
        workUnitTypes,
        category,
        resourceTypes,
        excludeResourceTypes,
        returnDetailedExceptionalTimes,
        period,
        startDate,
        endDate,
        encoding,
        extractType,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getTimes = getTimes;
function postTimes(body, opts) {
    return oazapfts.fetchJson("/times", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postTimes = postTimes;
function deleteTimes(opts) {
    return oazapfts.fetchJson("/times", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteTimes = deleteTimes;
function putTimes(opts) {
    return oazapfts.fetchJson("/times", {
        ...opts,
        method: "PUT"
    });
}
exports.putTimes = putTimes;
/**
 * Search timesheets
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/times-reports.csv?keywords=TPS1*
 *
 */
function getTimesReports(startMonth, endMonth, body, { keywords, resourceTypes, validationStates, closed, encoding, extractType, exportToDownloadCenter, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/times-reports${QS.query(QS.explode({
        keywords,
        resourceTypes,
        validationStates,
        closed,
        startMonth,
        endMonth,
        encoding,
        extractType,
        exportToDownloadCenter,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getTimesReports = getTimesReports;
/**
 * Create a timesheet
 */
function postTimesReports(body, opts) {
    return oazapfts.fetchJson("/times-reports", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postTimesReports = postTimesReports;
function deleteTimesReports(opts) {
    return oazapfts.fetchJson("/times-reports", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteTimesReports = deleteTimesReports;
function putTimesReports(opts) {
    return oazapfts.fetchJson("/times-reports", {
        ...opts,
        method: "PUT"
    });
}
exports.putTimesReports = putTimesReports;
/**
 * Get empty timesheet's default basic data
 */
function getTimesReportsDefault(resource, term, body, { agency } = {}, opts) {
    return oazapfts.fetchJson(`/times-reports/default${QS.query(QS.explode({
        resource,
        term,
        agency
    }))}`, {
        ...opts,
        body
    });
}
exports.getTimesReportsDefault = getTimesReportsDefault;
function putTimesReportsDefault(body, opts) {
    return oazapfts.fetchJson("/times-reports/default", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putTimesReportsDefault = putTimesReportsDefault;
function deleteTimesReportsDefault(opts) {
    return oazapfts.fetchJson("/times-reports/default", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteTimesReportsDefault = deleteTimesReportsDefault;
function postTimesReportsDefault(opts) {
    return oazapfts.fetchJson("/times-reports/default", {
        ...opts,
        method: "POST"
    });
}
exports.postTimesReportsDefault = postTimesReportsDefault;
/**
 * Get timesheet's basic data
 */
function getTimesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/times-reports/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getTimesReportsById = getTimesReportsById;
/**
 * Delete the timesheet
 */
function deleteTimesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/times-reports/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteTimesReportsById = deleteTimesReportsById;
/**
 * Update basic data related to a timesheet
 */
function putTimesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/times-reports/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putTimesReportsById = putTimesReportsById;
function postTimesReportsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/times-reports/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postTimesReportsById = postTimesReportsById;
/**
 * Create a thumbnail
 */
function postThumbnails(body, opts) {
    return oazapfts.fetchJson("/thumbnails", oazapfts.multipart({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postThumbnails = postThumbnails;
function getThumbnails(opts) {
    return oazapfts.fetchJson("/thumbnails", {
        ...opts
    });
}
exports.getThumbnails = getThumbnails;
function deleteThumbnails(opts) {
    return oazapfts.fetchJson("/thumbnails", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteThumbnails = deleteThumbnails;
function putThumbnails(opts) {
    return oazapfts.fetchJson("/thumbnails", {
        ...opts,
        method: "PUT"
    });
}
exports.putThumbnails = putThumbnails;
/**
 * Get thumbnail
 */
function getThumbnailsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/thumbnails/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getThumbnailsById = getThumbnailsById;
/**
 * Delete the thumbnail
 */
function deleteThumbnailsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/thumbnails/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteThumbnailsById = deleteThumbnailsById;
function postThumbnailsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/thumbnails/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postThumbnailsById = postThumbnailsById;
function putThumbnailsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/thumbnails/${encodeURIComponent(id)}`, {
        ...opts,
        method: "PUT",
        body
    });
}
exports.putThumbnailsById = putThumbnailsById;
/**
 * Search TodoLists
 */
function getTodolists(body, { sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/todolists${QS.query(QS.explode({
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getTodolists = getTodolists;
/**
 * Create a TodoLists
 */
function postTodolists(body, opts) {
    return oazapfts.fetchJson("/todolists", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postTodolists = postTodolists;
function deleteTodolists(opts) {
    return oazapfts.fetchJson("/todolists", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteTodolists = deleteTodolists;
function putTodolists(opts) {
    return oazapfts.fetchJson("/todolists", {
        ...opts,
        method: "PUT"
    });
}
exports.putTodolists = putTodolists;
/**
 * Get TodoList's data
 */
function getTodolistsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/todolists/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getTodolistsById = getTodolistsById;
/**
 * Update data related to a TodoList.
 */
function putTodolistsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/todolists/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putTodolistsById = putTodolistsById;
/**
 * Delete the TodoList
 */
function deleteTodolistsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/todolists/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteTodolistsById = deleteTodolistsById;
function postTodolistsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/todolists/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postTodolistsById = postTodolistsById;
/**
 * Log out user
 */
function deleteTrustelemById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/trustelem/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteTrustelemById = deleteTrustelemById;
function postTrustelemById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/trustelem/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postTrustelemById = postTrustelemById;
function putTrustelemById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/trustelem/${encodeURIComponent(id)}`, {
        ...opts,
        method: "PUT",
        body
    });
}
exports.putTrustelemById = putTrustelemById;
function getTrustelemById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/trustelem/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getTrustelemById = getTrustelemById;
/**
 * Search validations
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/validations.csv?keywords=TPS1*
 *
 */
function getValidations(startMonth, endMonth, body, { keywords, documentTypes, resourceTypes, validationStates, encoding, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/validations${QS.query(QS.explode({
        keywords,
        documentTypes,
        resourceTypes,
        validationStates,
        startMonth,
        endMonth,
        encoding,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getValidations = getValidations;
function postValidations(body, opts) {
    return oazapfts.fetchJson("/validations", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postValidations = postValidations;
function deleteValidations(opts) {
    return oazapfts.fetchJson("/validations", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteValidations = deleteValidations;
function putValidations(opts) {
    return oazapfts.fetchJson("/validations", {
        ...opts,
        method: "PUT"
    });
}
exports.putValidations = putValidations;
/**
 * Get validation's basic data
 */
function getValidationsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/validations/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getValidationsById = getValidationsById;
/**
 * Delete the validation
 */
function deleteValidationsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/validations/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteValidationsById = deleteValidationsById;
/**
 * Update basic data related to a validation
 */
function putValidationsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/validations/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putValidationsById = putValidationsById;
function postValidationsById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/validations/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postValidationsById = postValidationsById;
/**
 * Get vendor's basic data
 */
function getVendor(opts) {
    return oazapfts.fetchJson("/vendor", {
        ...opts
    });
}
exports.getVendor = getVendor;
/**
 * Update basic data related to a vendor
 */
function putVendor(body, opts) {
    return oazapfts.fetchJson("/vendor", oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putVendor = putVendor;
function deleteVendor(opts) {
    return oazapfts.fetchJson("/vendor", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteVendor = deleteVendor;
function postVendor(opts) {
    return oazapfts.fetchJson("/vendor", {
        ...opts,
        method: "POST"
    });
}
exports.postVendor = postVendor;
/**
 * Search webhooks
 */
function getWebhooks(opts) {
    return oazapfts.fetchJson("/webhooks", {
        ...opts
    });
}
exports.getWebhooks = getWebhooks;
/**
 * Create a request of webhook
 */
function postWebhooks(body, opts) {
    return oazapfts.fetchJson("/webhooks", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postWebhooks = postWebhooks;
function deleteWebhooks(opts) {
    return oazapfts.fetchJson("/webhooks", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteWebhooks = deleteWebhooks;
function putWebhooks(opts) {
    return oazapfts.fetchJson("/webhooks", {
        ...opts,
        method: "PUT"
    });
}
exports.putWebhooks = putWebhooks;
/**
 * Get webhook
 */
function getWebhooksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/webhooks/${encodeURIComponent(id)}`, {
        ...opts,
        body
    });
}
exports.getWebhooksById = getWebhooksById;
/**
 * Delete the webhook
 */
function deleteWebhooksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/webhooks/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE",
        body
    });
}
exports.deleteWebhooksById = deleteWebhooksById;
/**
 * Update webhook data
 */
function putWebhooksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/webhooks/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body
    }));
}
exports.putWebhooksById = putWebhooksById;
function postWebhooksById(body, { id } = {}, opts) {
    return oazapfts.fetchJson(`/webhooks/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST",
        body
    });
}
exports.postWebhooksById = postWebhooksById;
/**
 * Search workplace's times
 *
 * _You can specify the output format by appending to the url **.csv**_
 * *Example : {BASE_URL}/api/workplace-times.csv?keywords=TPS1 TPSEXP2*
 *
 */
function getWorkplacesTimes(body, { keywords, workplaceTypes, period, startDate, endDate, encoding, extractType, perimeterAgencies, perimeterBusinessUnits, perimeterPoles, perimeterManagers, narrowPerimeter, page, maxResults, sort, order } = {}, opts) {
    return oazapfts.fetchJson(`/workplaces-times${QS.query(QS.explode({
        keywords,
        workplaceTypes,
        period,
        startDate,
        endDate,
        encoding,
        extractType,
        perimeterAgencies,
        perimeterBusinessUnits,
        perimeterPoles,
        perimeterManagers,
        narrowPerimeter,
        page,
        maxResults,
        sort,
        order
    }))}`, {
        ...opts,
        body
    });
}
exports.getWorkplacesTimes = getWorkplacesTimes;
function postWorkplacesTimes(body, opts) {
    return oazapfts.fetchJson("/workplaces-times", oazapfts.json({
        ...opts,
        method: "POST",
        body
    }));
}
exports.postWorkplacesTimes = postWorkplacesTimes;
function deleteWorkplacesTimes(opts) {
    return oazapfts.fetchJson("/workplaces-times", {
        ...opts,
        method: "DELETE"
    });
}
exports.deleteWorkplacesTimes = deleteWorkplacesTimes;
function putWorkplacesTimes(opts) {
    return oazapfts.fetchJson("/workplaces-times", {
        ...opts,
        method: "PUT"
    });
}
exports.putWorkplacesTimes = putWorkplacesTimes;
//# sourceMappingURL=client.js.map