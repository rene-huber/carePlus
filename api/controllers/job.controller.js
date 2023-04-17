import Job from "../models/job.model.js";
import createError from "../utils/createError.js";

export const createjob = async (req, res, next) => {
  if (!req.isSeller)
    return next(createError(403, "Only sellers can create a job!"));

  const newjob = new Job({
    userId: req.userId,
    ...req.body,
  });

  try {
    const savedjob = await newjob.save();
    res.status(201).json(savedjob);
  } catch (err) {
    next(err);
  }
};
export const deletejob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job.userId !== req.userId)
      return next(createError(403, "You can delete only your job!"));

    await Job.findByIdAndDelete(req.params.id);
    res.status(200).send("Jobhas been deleted!");
  } catch (err) {
    next(err);
  }
};
export const getjob = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) next(createError(404, "Jobnot found!"));
    res.status(200).send(job);
  } catch (err) {
    next(err);
  }
};
export const getjobs = async (req, res, next) => {
  const q = req.query;
  const filters = {
    ...(q.userId && { userId: q.userId }),
    ...(q.cat && { cat: q.cat }),
    ...((q.min || q.max) && {
      price: {
        ...(q.min && { $gt: q.min }),
        ...(q.max && { $lt: q.max }),
      },
    }),
    ...(q.search && { title: { $regex: q.search, $options: "i" } }),
  };
  try {
    const jobs = await Job.find(filters).sort({ [q.sort]: -1 });
    res.status(200).send(jobs);
  } catch (err) {
    next(err);
  }
};

export const updatejob = async (req, res, next) => {
  const { id } = req.params;
  if (!req.isSeller)
    return next(createError(403, "Only sellers can update a job!"));

  try {
    const job = await Job.findById(id);
    if (!job) return next(createError(404, "Jobnot found"));

    // check if the job belongs to the user
    if (job.userId !== req.userId) {
      return next(
        createError(
          403,
          "You are not authorized to update a job that does not belong to you"
        )
      );
    }

    // update the job with the new data from req.body
    Object.keys(req.body).forEach((key) => {
      job[key] = req.body[key];
    });

    const updatedjob = await job.save();
    res.status(200).json(updatedjob);
  } catch (err) {
    next(err);
  }
};
