import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getUserRecipes } from "@/lib/db/recipes";
import { Grid, List } from "react-feather";

export default async function Home() {
  const recipes = await getUserRecipes();
  console.log(recipes);
  return (
    <Tabs defaultValue="list" className="pt-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Recipes</h1>
        {/* Temporary hiding tabs */}
        <TabsList className="hidden">
          <TabsTrigger value="list">
            <List size={20} />
          </TabsTrigger>
          <TabsTrigger value="cards">
            <Grid size={20} />
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="list" className="space-y-2">
        {recipes.map((recipe) => (
          <Card key={recipe.id}>
            <CardHeader className="p-3">
              <CardTitle>{recipe.title}</CardTitle>
              {Boolean(recipe.description) && (
                <CardDescription>{recipe.description}</CardDescription>
              )}
              {recipe.totalTime ? (
                <CardDescription>
                  {Math.floor(recipe.totalTime / 60)}h {recipe.totalTime % 60}m
                </CardDescription>
              ) : null}
            </CardHeader>
          </Card>
        ))}
      </TabsContent>
      <TabsContent value="cards">Make changes to your cards here.</TabsContent>
    </Tabs>
  );
}
