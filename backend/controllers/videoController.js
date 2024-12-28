


exports.uploadVideo = async (req, res) => {
  const { title, description, tags, url } = req.body;
  
  try {
    const video = new Video({ title, description, tags, url, user: req.user.id,createdAt:new Date().toLocaleDateString(),updatedAt: new Date().toLocaleDateString()});
    await video.save();
    res.json(video);
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.getVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (err) {
    res.status(500).send('Server error');
  }
};
