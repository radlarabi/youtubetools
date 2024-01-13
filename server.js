const express = require('express');
const cors = require('cors');
const ytdl = require('ytdl-core');
const app = express();
const PORT = 4000;

app.use(cors()); // Enable CORS for all routes

app.get('/download', async (req, res) => {
  const { videoUrl } = req.query;
  try {
    const info = await ytdl.getInfo(videoUrl);
    const downloadOptions = ytdl.filterFormats(info.formats, 'video');
    const chosenFormat = ytdl.chooseFormat(downloadOptions, { quality: 'highest' });

    const downloadLink = ytdl.downloadFromInfo(info, { format: chosenFormat });
    res.setHeader('Content-Disposition', `attachment; filename="${info.videoDetails.title}.${chosenFormat.container}"`);
    downloadLink.pipe(res);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
