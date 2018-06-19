class EventsController < ApplicationController
    def index

        @events = Event.all
      
        response = HTTParty.get("http://api.musixmatch.com/ws/1.1/track.search?apikey=d2534efb46fbe28c49449d58f2018e9d&f_track_release_group_first_release_date_max=19860514&f_track_release_group_first_release_date_min=19860514")
        

        @hash_version = JSON.parse(response.body)

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
      
      
      private
      
      def event_params
        params.require(:event).permit(:start_date, :end_date, :description)
      end



end
