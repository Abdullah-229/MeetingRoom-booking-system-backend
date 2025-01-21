import { Request, Response } from 'express';
import { createReport, getAllReports, getReportById, updateReport, deleteReport } from './report.service';

export const addReport = async (req: Request, res: Response) => {
  try {
    const report = await createReport(req.body);
    res.status(201).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReports = async (req: Request, res: Response) => {
  try {
    const reports = await getAllReports();
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getReport = async (req: Request, res: Response) => {
  try {
    const report = await getReportById(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateReportDetails = async (req: Request, res: Response) => {
  try {
    const report = await updateReport(req.params.id, req.body);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json(report);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const removeReport = async (req: Request, res: Response) => {
  try {
    const report = await deleteReport(req.params.id);
    if (!report) {
      return res.status(404).json({ message: 'Report not found' });
    }
    res.status(200).json({ message: 'Report deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
