class EventsController < ApplicationController
  require 'rspotify'
  
  def index

        @events = Event.all
        @specificdate = Event.where(:start_date => "2018-06-22")
        @events_by_date = Event.joins("")
        response = HTTParty.get("http://api.musixmatch.com/ws/1.1/track.search?apikey=d2534efb46fbe28c49449d58f2018e9d&f_track_release_group_first_release_date_max=19860514&f_track_release_group_first_release_date_min=19860514")

        @hash_version = JSON.parse(response.body)
        @tracks = RSpotify::Track.search('Thriller')

        # @list_name['message']['body']['track_list']['track'].each do |data| 
        #     track: data['track_name']
    
        # end
      end
      
      def show
        @event = Event.find(params[:id])
      
      end
      
      def new
        @events = Event.new
      end
      
      def create
      Event.create(event_params)
      redirect_to calendars_path
      flash[:notice] = "Thanks for submitting these questions"
    else
      return calendars_path
    
      end
      
      def edit
        # @students = Student.find(params[:id])
      end
      
      def update
        # @students = Student.find(params[:id])
        # @students.update(student_params)
        # redirect_to '/students'
      
          end
      
      def destroy
        # Student.find(params[:id]).destroy
        # redirect_to '/students'
      end
      def spotify
        spotify_user = RSpotify::User.new(request.env['omniauth.auth'])
        # Now you can access user's private data, create playlists and much more
    
        # Access private data
        spotify_user.country #=> "US"
        spotify_user.email   #=> "example@email.com"
    
        # Create playlist in user's Spotify account
        playlist = spotify_user.create_playlist!('my-awesome-playlist')
    
        # Add tracks to a playlist in user's Spotify account
        tracks = RSpotify::Track.search('Know')
        playlist.add_tracks!(tracks)
        playlist.tracks.first.name #=> "Somebody That I Used To Know"
    
        # Access and modify user's music library
        spotify_user.save_tracks!(tracks)
        spotify_user.saved_tracks.size #=> 20
        spotify_user.remove_tracks!(tracks)
    
        albums = RSpotify::Album.search('launeddas')
        spotify_user.save_albums!(albums)
        spotify_user.saved_albums.size #=> 10
        spotify_user.remove_albums!(albums)
    
        # Use Spotify Follow features
        spotify_user.follow(playlist)
        spotify_user.unfollow(users)
    
        # Get user's top played artists and tracks
        spotify_user.top_artists #=> (Artist array)
        spotify_user.top_tracks(time_range: 'short_term') #=> (Track array)
    
        # Check doc for more
      end
      
      private
      
      def event_params
        params.require(:event).permit(:start_date, :end_date, :description)
      end



end
