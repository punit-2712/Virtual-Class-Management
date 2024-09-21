// Target interface
interface MediaPlayer {
  play(file: string): void;
}

// Adaptee (incompatible class)
class VLCPlayer {
  playVLC(file: string): void {
    console.log(`Playing VLC file: ${file}`);
  }
}

class MP4Player {
  playMP4(file: string): void {
    console.log(`Playing MP4 file: ${file}`);
  }
}

// Adapter class
class MediaAdapter implements MediaPlayer {
  private player: VLCPlayer | MP4Player;

  constructor(fileType: string) {
    if (fileType === 'vlc') {
      this.player = new VLCPlayer();
    } else if (fileType === 'mp4') {
      this.player = new MP4Player();
    } else {
      throw new Error('Unsupported file format');
    }
  }

  play(file: string): void {
    if (this.player instanceof VLCPlayer) {
      this.player.playVLC(file);
    } else if (this.player instanceof MP4Player) {
      this.player.playMP4(file);
    }
  }
}

// Client code
class AudioPlayer implements MediaPlayer {
  private adapter: MediaAdapter | null = null;

  play(file: string): void {
    const fileType = file.split('.').pop();

    if (fileType === 'mp3') {
      console.log(`Playing MP3 file: ${file}`);
    } else if (fileType === 'vlc' || fileType === 'mp4') {
      this.adapter = new MediaAdapter(fileType);
      this.adapter.play(file);
    } else {
      console.log('Unsupported media format.');
    }
  }
}

// Client usage
const audioPlayer = new AudioPlayer();
audioPlayer.play('song.mp3');  // Playing MP3 file: song.mp3
audioPlayer.play('movie.vlc'); // Playing VLC file: movie.vlc
audioPlayer.play('video.mp4'); // Playing MP4 file: video.mp4
