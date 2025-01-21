import { IReport } from './report.interface';
import Report from './report.model';

export const createReport = async (reportData: IReport) => {
  const report = new Report(reportData);
  await report.save();
  return report;
};

export const getAllReports = async () => {
  return Report.find();
};

export const getReportById = async (id: string) => {
  return Report.findById(id);
};

export const updateReport = async (id: string, reportData: Partial<IReport>) => {
  return Report.findByIdAndUpdate(id, reportData, { new: true });
};

export const deleteReport = async (id: string) => {
  return Report.findByIdAndDelete(id);
};
