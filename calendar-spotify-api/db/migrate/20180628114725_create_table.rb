class CreateTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tables do |t|
      t.date :end_date
    end
  end
end
