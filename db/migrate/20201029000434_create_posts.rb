class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :title
      t.text :body1
      t.text :body2
      t.text :body3
      t.text :body4
      t.text :body5
      t.string :miles
      t.string :location
      t.float :latitude
      t.float :longitude

      t.timestamps
    end
  end
end
