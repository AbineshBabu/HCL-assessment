const report = require('multiple-cucumber-html-reporter');
 
report.generate({
    jsonDir: './cucumber-json',
    pageTitle: 'HCL',
    reportName: 'Assessment',
    durationInMS: true,
    displayDuration: true,
    displayReportTime: true,
    hideMetadata: true,
    reportPath: './report/',
});